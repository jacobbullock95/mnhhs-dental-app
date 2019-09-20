using System;
using System.Collections.Generic;

namespace DentalApp.API.Models
{
    public class User
    {
       public int Id { get; set; } 

       public string Username { get; set; }

       public byte[] PasswordHash { get; set; }

       public byte[] PasswordSalt { get; set; }
        

       public string FirstName { get; set; }

       public string LastName { get; set; }

       public string Phone { get; set; }

       public string MedicareNumber { get; set; }

       public string MedicareCode { get; set; }

       public string MedicareExpiry { get; set; }

       public string EmailVerified { get; set; }

       

       public ICollection<ConsentForm> ConsentForms { get; set;}
    }
}