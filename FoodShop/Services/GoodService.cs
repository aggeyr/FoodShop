using System;
using System.Collections.Generic;
using FoodShop.Models;
using FoodShop.DataProperties;
using System.Linq;

namespace FoodShop.Services
{
    public class GoodService : IGoodService
    {
        private readonly FoodShopContext context;

        public GoodService(FoodShopContext context)
        {
            this.context = context;
        }

        public void AddGood(Good g)
        {
            context.Goods.Add(g);
            context.SaveChanges();
        }

        public IList<Good> GetGoodsByCategoryId(Guid id)
        {
            return context.Goods
                .Include("Configurations")
                .Where(g => g.Categories.Any(c => c.Id == id))
                .ToList();
        }

        public IList<Good> GetGoodsByCategoryName(string name)
        {
            return context.Goods
                .Include("Configurations")
                .Where(g => g.Categories.Any(c => c.Name == name))
                .ToList();
        }
    }
}