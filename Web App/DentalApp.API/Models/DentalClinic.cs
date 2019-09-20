namespace DentalApp.API.Models
{
    public class DentalClinic
    {
        public int Id { get; set; }
        public string ClinicType { get; set; }

        public string Name { get; set; }

        public string Phone { get; set; }

        public string Address { get; set; }
        public string Suburb { get; set; }
    }
}