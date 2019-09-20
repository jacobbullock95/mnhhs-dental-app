using System.ComponentModel.DataAnnotations;

namespace DentalApp.API.Dtos
{
    public class UserForRegisterDto
    {
        [Required]
        public string Username { get; set; }

        [Required]
        [StringLength(8, MinimumLength = 4, ErrorMessage = "Password must be between 4 & 8 charachters")]
        public string Password { get; set; }

        [Required]
        public string FirstName { get; set; }
        [Required]
        public string LastName { get; set; }

        public string MedicareNumber { get; set; }

        public string MedicareCode { get; set; }

        public string MedicareExpiry { get; set; }

        public string Phone { get; set; }
    }
}