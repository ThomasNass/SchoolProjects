using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using System.Net.Http.Headers;
using System.Runtime.Serialization.Json;
using System.Text;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    [Authorize]
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public async Task<IActionResult> IndexAsync()
        {
            try
            {
                var user = this.HttpContext.User;

                if (user == null) return NotFound();

                var token = user.FindFirst("jwtToken");

                if (token == null)
                {
                    return NotFound("Token is null");
                }

                using (var client = new HttpClient())
                {
                    var uri = new Uri("https://api.smarthut.se/buildinginfo/getmybuilding");

                    client.DefaultRequestHeaders.Authorization =
                        new AuthenticationHeaderValue("Bearer", token.Value);

                    var response = await client.GetAsync(uri);

                    response.EnsureSuccessStatusCode();

                    string stringResponseBody = await response.Content.ReadAsStringAsync();
                    using (MemoryStream? ms = new MemoryStream(Encoding.Unicode.GetBytes(stringResponseBody)))
                    {
                        DataContractJsonSerializer deserializer = new DataContractJsonSerializer(typeof(ViewModel));
                        ViewModel model = (ViewModel)deserializer.ReadObject(ms);
                        return View(model);
                    }

                       
                }
            }

           
            catch (Exception ex) { 
            return View(ex);
            }
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [AllowAnonymous]
        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}