using Microsoft.AspNetCore.Authentication.OpenIdConnect;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Text;

namespace test.Controllers
{
    [Authorize]
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
       

        private readonly ILogger<WeatherForecastController> _logger;
        static readonly HttpClient client = new HttpClient();

        public WeatherForecastController(ILogger<WeatherForecastController> logger)
        {
            _logger = logger;
        }
        //[AllowAnonymous]
        [HttpGet]
        public async Task <IActionResult> Get(CancellationToken cts = default)
        {
            try
            {
                var url = "https://links.api.jobtechdev.se/joblinks?q=vetlanda&limit=100";
                var url2 = "https://login.microsoftonline.com/9bfa1706-1ffc-494d-a63e-dbbb34c4796b/oauth2/v2.0/authorize";
                var url3 = "https://api.smarthut.se/BuildingInfo/GetMyBuilding";
                var url4 = "https://smarthut.azurewebsites.net/api/negotiate";
                var response = await client.GetAsync(url3);
                response.EnsureSuccessStatusCode();
                var stringResponseBody = await response.Content.ReadAsStringAsync();
                return Ok(stringResponseBody);
            }
            catch (Exception ex)
            {
                return Unauthorized(ex.Message);
            }
        }

        /*[AllowAnonymous]
        [HttpPost(Name = "authenticate")]
        public async Task<IActionResult> Send()
        {
            try
            {
                var id = new { Instance= "https://login.microsoftonline.com/",
    Domain= "smarthut.onmicrosoft.com",
    TenantId= "9bfa1706-1ffc-494d-a63e-dbbb34c4796b",
    ClientId= "bbc12952-ec77-474d-b1cc-bbdb83d2808f",
    CallbackPath= "/signin-oidc" };
                var json = JsonConvert.SerializeObject(id);
                var data = new StringContent(json,Encoding.UTF8, "application/json");
                var url2 = "https://login.microsoftonline.com/9bfa1706-1ffc-494d-a63e-dbbb34c4796b/oauth2/v2.0/authorize";
                var response = await client.PostAsync(url2,data);

                var result = await response.Content.ReadAsStringAsync();
                return Ok(result);
            }
            catch (Exception ex)
            {
                return Unauthorized(ex.Message);
            }
        }*/

        /* [HttpGet("negotiate")]
         public async Task <IActionResult> Get()
         {

         }*/

    }
}