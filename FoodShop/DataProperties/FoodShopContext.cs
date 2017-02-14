using FoodShop.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace FoodShop.DataProperties
{
    public class FoodShopContext: DbContext
    {
        public FoodShopContext()
			: base("FoodShopConnection")
		{
        }

        public DbSet<Category> Categories { get; set; }
        public DbSet<Configuration> Configurations { get; set; }
        public DbSet<Discount> Discounts { get; set; }
        public DbSet<Good> Goods { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<Subscription> Subscriptions { get; set; }
        public DbSet<User> Users { get; set; }
    }
}