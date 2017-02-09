using Autofac;
using Autofac.Core;
using Autofac.Integration.Mvc;
using FoodShop.Controllers;
using FoodShop.Models;
using FoodShop.Services;
using System.Web.Mvc;

namespace FoodShop.Util
{
    public class AutofacConfig
    {
        public static void ConfigureContainer()
        {
            var builder = new ContainerBuilder();
            builder.RegisterControllers(typeof(MvcApplication).Assembly);

            builder.RegisterType<ApplicationDbContext>().
               AsSelf()
               .InstancePerLifetimeScope();

            builder.RegisterAssemblyTypes(typeof(IBaseService).Assembly)
                .Where(s => s.Name.EndsWith("Service"))
                .AsImplementedInterfaces()
                .PropertiesAutowired();
           


            var container = builder.Build();
            DependencyResolver.SetResolver(new AutofacDependencyResolver(container));

          
        }
    }
}