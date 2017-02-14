using System;
using System.Collections.Generic;
using System.ComponentModel;
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
        public User User { get; set; }

        public Discount UsedDiscount { get; set; }

        [DefaultValue(false)]
        public bool Closed { get; set; }

        public IList<Good> Goods { get; set; }
    }
}