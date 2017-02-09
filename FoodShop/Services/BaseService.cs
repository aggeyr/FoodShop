using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using FoodShop.Models;

namespace FoodShop.Services
{
    public class BaseService : IBaseService
    {
        public ApplicationDbContext Context
        {
            get
            {
                return new ApplicationDbContext();
            }
        }

    }
}