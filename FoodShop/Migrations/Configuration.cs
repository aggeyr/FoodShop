using System;
using System.IO;

namespace FoodShop.Migrations
{
    using Models;
    using System;
    using System.Collections;
    using System.Collections.Generic;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<FoodShop.Models.ApplicationDbContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(FoodShop.Models.ApplicationDbContext context)
        {
            context.Categories.AddOrUpdate(x => x.Id,
                new Category() { Name = "salads" },
                new Category() { Name = "hot" },
                new Category() { Name = "pizza" },
                new Category() { Name = "sushi" }
             );

            base.Seed(context);
        }
    }
}
