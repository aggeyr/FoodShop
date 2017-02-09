using FoodShop.Models;
using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FoodShop.Services
{
    public class MenuService: IMenuService
    {
        private readonly ApplicationDbContext context;

        public MenuService(ApplicationDbContext context) : base()
        {
            this.context = context;
        }

        public void AddGood(Good good)
        {
            context.Goods.Add(good);
        }
    }
}