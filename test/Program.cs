using Microsoft.AspNetCore.Authentication.OpenIdConnect;
using Microsoft.Identity.Web;
using System.Security.Claims;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddCors();

// Create a default cookie policy
builder.Services.Configure<CookiePolicyOptions>(options => {
    options.CheckConsentNeeded = context => true;
    options.MinimumSameSitePolicy = SameSiteMode.Unspecified;
    options.HandleSameSiteCookieCompatibility();
});

// Add a default authentication scheme using the cookie policy
// and connect it to Azure AD using OpenIDConnect
builder.Services
 .AddAuthentication(OpenIdConnectDefaults.AuthenticationScheme)
 .AddMicrosoftIdentityWebApp(options => builder.Configuration.Bind("AzureAd", options));
// Add an event to the default authentication scheme that stores the openid jwt token
// This needs to be included in further requests and can also be
// exposed to browser clients
builder.Services
 .Configure<OpenIdConnectOptions>(OpenIdConnectDefaults.AuthenticationScheme,
 options => {
     options.Events = new OpenIdConnectEvents
     {
                     // When the token is validated, store it as a claim so that it can.be retrieved
                     // from the user object later
                     OnTokenValidated = ctx => {
             var jwtToken = ctx.SecurityToken.RawData;
             ((ClaimsIdentity)ctx.Principal.Identity).AddClaim(new Claim("jwtToken", jwtToken));
             return Task.CompletedTask;
         }
     };
 });

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors(x => x
               .AllowAnyMethod()
               .AllowAnyHeader()
               .WithOrigins("http://localhost:5001") // allow any origin
               .AllowCredentials()); // allow credentials

app.UseHttpsRedirection();

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

//SPA I EGEN APP LÄGG TILL USE.STATIC
//KOLLA HOW TO ADD AUTHENTICATION IN FRONT OF STATIC FILES
app.Run();
