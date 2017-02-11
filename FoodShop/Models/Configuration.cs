using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace FoodShop.Models
{
    [Table("Configurations")]
    public class Configuration
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; set; }

        [Required]
        public Good ParentGoods { get; set; }

        public string Size { get; set; }

        public double? Weight { get; set; }

        public decimal? Price { get; set; }
    }
}