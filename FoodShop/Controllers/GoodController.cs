using FoodShop.Models;
using FoodShop.Services;
using System;
using System.Collections.Generic;
using System.Web.Http;
using System.Web.Http.Cors;

namespace FoodShop.Controllers
{
    [EnableCors("*", "*", "*")]
    public class GoodController: ApiController
    {
        private readonly IGoodService service;

        public GoodController(IGoodService service)
        {
            this.service = service;
        }
        public void AddGood(Good g)
        {
            service.AddGood(g);
        }

        public IEnumerable<Good> GetGoodsByCategoryId(Guid id)
        {
            return service.GetGoodsByCategoryId(id);
        }

        public IEnumerable<Good> GetGoodsByCategoryName(string name)
        {
            return service.GetGoodsByCategoryName(name);
        }
    }
}