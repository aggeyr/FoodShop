using System;
using System.Collections.Generic;
using System.Linq;
using FoodShop.Models;

namespace FoodShop.Services
{
    public class GoodService : IGoodService
    {
        private readonly ApplicationDbContext context;

        public GoodService(ApplicationDbContext context)
        {
            this.context = context;
        }

        public void AddGood(Good g)
        {
            context.Goods.Add(g);
        }

        public IList<Good> GetGoodsByCategoryId(Guid id)
        {
            return context.Goods
                .Where(g => g.Categories.Any(c => c.Id == id))
                .ToList();
        }

        public IList<Good> GetGoodsByCategoryName(string name)
        {
            return context.Goods
                .Where(g => g.Categories.Any(c => c.Name == name))
                .ToList();
        }
    }
}