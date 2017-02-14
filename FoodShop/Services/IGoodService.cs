using FoodShop.Models;
using System;
using System.Collections.Generic;

namespace FoodShop.Services
{
    public interface IGoodService
    {
        void AddGood(Good good);

        IList<Good> GetGoodsByCategoryId(Guid id);

        IList<Good> GetGoodsByCategoryName(string name);
    }
}