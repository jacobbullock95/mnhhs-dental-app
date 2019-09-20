using Microsoft.EntityFrameworkCore;
using DentalApp.API.Models;

namespace DentalApp.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base (options) {}

        public DbSet<Value> Values { get; set; }
            
        public DbSet<User> Users { get; set; }

        public DbSet<ConsentForm> ConsentForms { get; set; }

        public DbSet<DentalClinic> DentalClinics { get; set; }

    }
}