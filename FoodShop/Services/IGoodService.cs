using FoodShop.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FoodShop.Services
{
    public interface IGoodService
    {
        void AddGood(Good g);

        IList<Good> GetGoodsByCategoryId(Guid id);

        IList<Good> GetGoodsByCategoryName(string name);
    }
}