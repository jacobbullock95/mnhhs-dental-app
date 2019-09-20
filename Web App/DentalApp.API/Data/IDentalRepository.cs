using System.Collections.Generic;
using System.Threading.Tasks;
using DentalApp.API.Models;

namespace DentalApp.API.Data
{
    public interface IDentalRepository
    {
         void Add<T>(T entity) where T: class;
         void Delete<T>(T entity) where T: class;

         Task<bool> SaveAll();
         Task<IEnumerable<User>> GetUsers();
         Task<User> GetUser(int id);

        Task<IEnumerable<DentalClinic>> GetClinics();
        Task<DentalClinic> GetClinic(int id);         
    }
}