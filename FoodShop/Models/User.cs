using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace FoodShop.Models
{
    [Table("Users")]
    public class User
    {
        public User()
        {
            AvatarUrl = "http://res.cloudinary.com/dum4mjc9q/image/upload/v1462886192/UserAvatars/defaultUser.png";
        }

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; set; }

        [Required]
        [StringLength(200)]
        [Index(IsUnique = true)]
        public string Name { get; set; }

        public string About { get; set; }

        public string AvatarUrl { get; set; }

        public IList<Subscription> Subscriptions { get; set; }
    }
}