using Autofac;
using Autofac.Integration.WebApi;
using FoodShop.DataProperties;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Web;
using System.Web.Http;

namespace FoodShop.App_Start
{
    public class AutofacConfig
    {
        public static void ConfigureContainer()
        {
            var builder = new ContainerBuilder();
            
            builder.RegisterApiControllers(Assembly.GetExecutingAssembly());

            builder.RegisterType<FoodShopContext>().
               AsSelf()
               .InstancePerLifetimeScope();

            builder.RegisterAssemblyTypes(Assembly.GetExecutingAssembly())
                .Where(s => s.Name.EndsWith("Service"))
                .AsImplementedInterfaces()
                .PropertiesAutowired();

            var container = builder.Build();
            var config = GlobalConfiguration.Configuration;
            config.DependencyResolver = new AutofacWebApiDependencyResolver(container);

        }
    }
}