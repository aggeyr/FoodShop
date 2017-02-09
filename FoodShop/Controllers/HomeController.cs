using FoodShop.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http.Cors;
using System.Web.Mvc;

namespace FoodShop.Controllers
{
    [EnableCors("*", "*", "*")]
    public class HomeController : Controller
    {
        private readonly IMenuService menuService;

        public HomeController(IMenuService menuService)
        {
            this.menuService = menuService;
        }

        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}