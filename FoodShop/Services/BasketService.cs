using FoodShop.DataProperties;
using FoodShop.Models;
using System.Collections.Generic;
namespace FoodShop.Services
{
    public class BasketService : IBasketService
    {
        private readonly FoodShopContext context;

        public BasketService(FoodShopContext context)
        {
            this.context = context;
        }

        public decimal CountTotal(IEnumerable<OrderGoodModel> goods)
        {
            decimal total = 0;
            foreach (var orderModel in goods)
            {
                var configuration = context.Configurations.Find(orderModel.ConfigurationId);
                total += configuration.Price * orderModel.Number;
            }
            return total;
        }
    }
}