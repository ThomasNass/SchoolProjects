using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.OpenIdConnect;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc.Authorization;
using Microsoft.Identity.Web;
using Microsoft.Identity.Web.UI;
using System.Security.Claims;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddAuthentication(OpenIdConnectDefaults.AuthenticationScheme)
    .AddMicrosoftIdentityWebApp(builder.Configuration.GetSection("AzureAd"));

builder.Services
  .Configure<OpenIdConnectOptions>(OpenIdConnectDefaults.AuthenticationScheme,
    options => {
        options.Events = new OpenIdConnectEvents
        {
            // When the token is validated, store it as a claim so that it can.be retrieved 
            // from the user object later 
            OnTokenValidated = ctx => {
                var jwtToken = ctx.SecurityToken.RawData;

                if (ctx.Principal?.Identity != null)
                {
                    ((ClaimsIdentity)ctx.Principal.Identity).AddClaim(new Claim("jwtToken", jwtToken));
                    return Task.CompletedTask;
                }

                throw new NullReferenceException("Ctx.Principal or ctx.Principal.Identity is Null");
            }
        };
    });

builder.Services.AddControllersWithViews(options =>
{
    var policy = new AuthorizationPolicyBuilder()
        .RequireAuthenticatedUser()
        .Build();
    options.Filters.Add(new AuthorizeFilter(policy));
});
builder.Services.AddRazorPages()
    .AddMicrosoftIdentityUI();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthentication();
app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");
app.MapRazorPages();

app.Run();
