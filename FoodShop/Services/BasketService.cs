﻿using FoodShop.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FoodShop.Services
{
    public class BasketService: IBasketService
    {
        private readonly ApplicationDbContext context;

        public BasketService(ApplicationDbContext context)
        {
            this.context = context;
        }

        public decimal CountTotal(IEnumerable<OrderGoodModel> goods)
        {
            decimal total = 0;
            foreach(var orderModel in goods)
            {
                var configuration = context.Configurations.Find(orderModel.ConfigurationId);
                total += configuration.Price * orderModel.Number;
            }
            return total;
        }
    }
}