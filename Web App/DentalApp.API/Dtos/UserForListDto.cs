using System;

namespace DentalApp.API.Dtos
{
    public class UserForListDto
    {
       public int Id { get; set; } 

       public string Username { get; set; }
        
       public string FirstName { get; set; }

       public string LastName { get; set; }

       public string Phone { get; set; }

       public string EmailVerified { get; set; }
    }
}