using BlazorServerAppTest;
using BlazorServerAppTest.Data;
using BlazorServerAppTest.Models;
using BlazorServerAppTest.Repositories;
using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Components.Web;
using Microsoft.AspNetCore.SignalR;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddRazorPages();
builder.Services.AddSignalR();
builder.Services.AddHttpClient();
builder.Services.AddServerSideBlazor();
builder.Services.AddSingleton<WeatherForecastService>();
builder.Services.AddScoped<IMessageRepo, MessageMemoryRepo>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();

app.UseStaticFiles();

app.UseRouting();

app.MapGet("/allMessages", (IMessageRepo messageRepo) =>
 {
     return messageRepo.GetAll();
 });

app.MapPost("newMessage", (Message message, IMessageRepo messageRepo, IHubContext<ChatHub> hubContext) => {

    messageRepo.newMessage(message);
    hubContext.Clients.All.SendAsync("Broadcast", message.username, message.message);
});

app.MapBlazorHub();
app.MapHub<ChatHub>(ChatHub.HubUrl);
app.MapFallbackToPage("/_Host");

app.Run();
