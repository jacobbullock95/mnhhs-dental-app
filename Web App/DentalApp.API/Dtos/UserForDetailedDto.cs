using System;
using System.Collections.Generic;
using DentalApp.API.Models;

namespace DentalApp.API.Dtos
{
    public class UserForDetailedDto
    {
       public int Id { get; set; } 

       public string Username { get; set; }
        
       public string FirstName { get; set; }

       public string LastName { get; set; }

       public string Phone { get; set; }

       public string MedicareNumber { get; set; }

       public string MedicareCode { get; set; }

       public string MedicareExpiry { get; set; }

       public string EmailVerified { get; set; }

       public ICollection<ConsentFormsForDetailedDto> ConsentForms { get; set; }
    }
}