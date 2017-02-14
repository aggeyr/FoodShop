using FoodShop.Models;
using FoodShop.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Http.Cors;

namespace FoodShop.Controllers
{
    [EnableCors("*", "*", "*")]
    public class BasketController : ApiController
    {
        private readonly IBasketService service;

        public BasketController(IBasketService service)
        {
            this.service = service;
        }

        public decimal CountTotal(IEnumerable<OrderGoodModel> goods)
        {
            return service.CountTotal(goods);
        }
    }
}