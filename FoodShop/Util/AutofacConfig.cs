using Autofac;
using Autofac.Core;
using Autofac.Integration.Mvc;
using Autofac.Integration.WebApi;
using FoodShop.Controllers;
using FoodShop.Models;
using FoodShop.Services;
using System.Reflection;
using System.Web.Http;
using System.Web.Mvc;

namespace FoodShop.Util
{
    public class AutofacConfig
    {
        public static void ConfigureContainer()
        {
            var builder = new ContainerBuilder();

            builder.RegisterControllers(Assembly.GetExecutingAssembly());
            builder.RegisterApiControllers(Assembly.GetExecutingAssembly());

            builder.RegisterType<ApplicationDbContext>().
               AsSelf()
               .InstancePerLifetimeScope();

            builder.RegisterAssemblyTypes(typeof(IBaseService).Assembly)
                .Where(s => s.Name.EndsWith("Service"))
                .AsImplementedInterfaces()
                .PropertiesAutowired();
           


            var container = builder.Build();
            //DependencyResolver.SetResolver(new AutofacWebApiDependencyResolver(container));
            var config = GlobalConfiguration.Configuration;
            config.DependencyResolver = new AutofacWebApiDependencyResolver(container);

        }
    }
}