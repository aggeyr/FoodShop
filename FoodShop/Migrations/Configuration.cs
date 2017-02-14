namespace FoodShop.Migrations
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<FoodShop.DataProperties.FoodShopContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(FoodShop.DataProperties.FoodShopContext context)
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
