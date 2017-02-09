using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace FoodShop.Models
{
    [Table("Orders")]
    public class Order
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; set; }

        public DateTime Date { get; set; }

        [Required]
        public ApplicationUser User { get; set; }

        public Discount UsedDiscount { get; set; }

        public Decimal Total { get; set; }
    }
}