using System.Web.Http;

namespace FoodShop.App_Start
{
    public class WebApiConfig
    {
        public static void Register(HttpConfiguration configuration)
        {
            configuration.EnableCors();

            //configuration.MapHttpAttributeRoutes();

            configuration.Routes.MapHttpRoute(
                "API Default", 
                "api/{controller}/{action}/{id}",
                new { id = RouteParameter.Optional });
        }
    }
}