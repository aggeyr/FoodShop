using FoodShop.Models;
using System.Collections.Generic;

namespace FoodShop.Services
{
    public interface IBasketService
    {
        decimal CountTotal(IEnumerable<OrderGoodModel> goods);
    }
}