using FoodShop.App_Start;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Configuration;
using System.Web.Http;

namespace FoodShop
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            config.EnableCors();
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{action}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );

            var clientID = WebConfigurationManager.AppSettings["auth0:ClientId"];
            var clientSecret = WebConfigurationManager.AppSettings["auth0:ClientSecret"];
            config.MessageHandlers.Add(new JwtBearerAuthenticationOptions
            {
                Audience = clientID,
                SymmetricKey = clientSecret,
                IsSecretBase64Encoded = false
            });
        }
    }
}
