using FoodShop.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FoodShop.Services
{
    public interface IBasketService
    {
        decimal CountTotal(IEnumerable<OrderGoodModel> goods);
    }
}