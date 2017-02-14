namespace FoodShop.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Initial : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Categories",
                c => new
                    {
                        Id = c.Guid(nullable: false, identity: true),
                        ParentId = c.Guid(),
                        Name = c.String(nullable: false, maxLength: 200),
                    })
                .PrimaryKey(t => t.Id)
                .Index(t => t.Name, unique: true);
            
            CreateTable(
                "dbo.Goods",
                c => new
                    {
                        Id = c.Guid(nullable: false, identity: true),
                        Name = c.String(nullable: false),
                        Description = c.String(),
                        ImageUrl = c.String(),
                        Discount_Id = c.Guid(),
                        Order_Id = c.Guid(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Discounts", t => t.Discount_Id)
                .ForeignKey("dbo.Orders", t => t.Order_Id)
                .Index(t => t.Discount_Id)
                .Index(t => t.Order_Id);
            
            CreateTable(
                "dbo.Configurations",
                c => new
                    {
                        Id = c.Guid(nullable: false, identity: true),
                        Size = c.String(),
                        Weight = c.Double(),
                        Price = c.Decimal(nullable: false, precision: 18, scale: 2),
                        ParentGoods_Id = c.Guid(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Goods", t => t.ParentGoods_Id, cascadeDelete: true)
                .Index(t => t.ParentGoods_Id);
            
            CreateTable(
                "dbo.Discounts",
                c => new
                    {
                        Id = c.Guid(nullable: false, identity: true),
                        Name = c.String(nullable: false),
                        Description = c.String(),
                        Start = c.DateTime(nullable: false),
                        Expire = c.DateTime(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Orders",
                c => new
                    {
                        Id = c.Guid(nullable: false, identity: true),
                        Date = c.DateTime(nullable: false),
                        Closed = c.Boolean(nullable: false),
                        UsedDiscount_Id = c.Guid(),
                        User_Id = c.Guid(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Discounts", t => t.UsedDiscount_Id)
                .ForeignKey("dbo.Users", t => t.User_Id, cascadeDelete: true)
                .Index(t => t.UsedDiscount_Id)
                .Index(t => t.User_Id);
            
            CreateTable(
                "dbo.Users",
                c => new
                    {
                        Id = c.Guid(nullable: false, identity: true),
                        Name = c.String(nullable: false, maxLength: 200),
                        About = c.String(),
                        AvatarUrl = c.String(),
                    })
                .PrimaryKey(t => t.Id)
                .Index(t => t.Name, unique: true);
            
            CreateTable(
                "dbo.Subscriptions",
                c => new
                    {
                        Id = c.Guid(nullable: false, identity: true),
                        Name = c.String(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.GoodCategories",
                c => new
                    {
                        Good_Id = c.Guid(nullable: false),
                        Category_Id = c.Guid(nullable: false),
                    })
                .PrimaryKey(t => new { t.Good_Id, t.Category_Id })
                .ForeignKey("dbo.Goods", t => t.Good_Id, cascadeDelete: true)
                .ForeignKey("dbo.Categories", t => t.Category_Id, cascadeDelete: true)
                .Index(t => t.Good_Id)
                .Index(t => t.Category_Id);
            
            CreateTable(
                "dbo.SubscriptionUsers",
                c => new
                    {
                        Subscription_Id = c.Guid(nullable: false),
                        User_Id = c.Guid(nullable: false),
                    })
                .PrimaryKey(t => new { t.Subscription_Id, t.User_Id })
                .ForeignKey("dbo.Subscriptions", t => t.Subscription_Id, cascadeDelete: true)
                .ForeignKey("dbo.Users", t => t.User_Id, cascadeDelete: true)
                .Index(t => t.Subscription_Id)
                .Index(t => t.User_Id);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Orders", "User_Id", "dbo.Users");
            DropForeignKey("dbo.SubscriptionUsers", "User_Id", "dbo.Users");
            DropForeignKey("dbo.SubscriptionUsers", "Subscription_Id", "dbo.Subscriptions");
            DropForeignKey("dbo.Orders", "UsedDiscount_Id", "dbo.Discounts");
            DropForeignKey("dbo.Goods", "Order_Id", "dbo.Orders");
            DropForeignKey("dbo.Goods", "Discount_Id", "dbo.Discounts");
            DropForeignKey("dbo.Configurations", "ParentGoods_Id", "dbo.Goods");
            DropForeignKey("dbo.GoodCategories", "Category_Id", "dbo.Categories");
            DropForeignKey("dbo.GoodCategories", "Good_Id", "dbo.Goods");
            DropIndex("dbo.SubscriptionUsers", new[] { "User_Id" });
            DropIndex("dbo.SubscriptionUsers", new[] { "Subscription_Id" });
            DropIndex("dbo.GoodCategories", new[] { "Category_Id" });
            DropIndex("dbo.GoodCategories", new[] { "Good_Id" });
            DropIndex("dbo.Users", new[] { "Name" });
            DropIndex("dbo.Orders", new[] { "User_Id" });
            DropIndex("dbo.Orders", new[] { "UsedDiscount_Id" });
            DropIndex("dbo.Configurations", new[] { "ParentGoods_Id" });
            DropIndex("dbo.Goods", new[] { "Order_Id" });
            DropIndex("dbo.Goods", new[] { "Discount_Id" });
            DropIndex("dbo.Categories", new[] { "Name" });
            DropTable("dbo.SubscriptionUsers");
            DropTable("dbo.GoodCategories");
            DropTable("dbo.Subscriptions");
            DropTable("dbo.Users");
            DropTable("dbo.Orders");
            DropTable("dbo.Discounts");
            DropTable("dbo.Configurations");
            DropTable("dbo.Goods");
            DropTable("dbo.Categories");
        }
    }
}
