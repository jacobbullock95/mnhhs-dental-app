using System.Collections.Generic;
using System.Threading.Tasks;
using DentalApp.API.Models;
using Microsoft.EntityFrameworkCore;

namespace DentalApp.API.Data
{
    public class DentalRepository : IDentalRepository
    {
        private readonly DataContext _context;
        public DentalRepository(DataContext context)
        {
            _context = context;

        }
        public void Add<T>(T entity) where T : class
        {
            _context.Add(entity);
        }

        public void Delete<T>(T entity) where T : class
        {
            _context.Remove(entity);
        }

        public async Task<User> GetUser(int id)
        {
            var user = await _context.Users.Include(p => p.ConsentForms).FirstOrDefaultAsync(u => u.Id == id);
            return user;
        }

        public async Task<IEnumerable<User>> GetUsers()
        {
            var users = await _context.Users.Include(p => p.ConsentForms).ToListAsync();
            return users;
        }

        public async Task<DentalClinic> GetClinic(int id)
        {
            var clinic = await _context.DentalClinics.FirstOrDefaultAsync(u => u.Id == id);
            return clinic;
        }

        public async Task<IEnumerable<DentalClinic>> GetClinics()
        {
            var clinics = await _context.DentalClinics.ToListAsync();
            return clinics;
        }

        public async Task<bool> SaveAll()
        {
            return await _context.SaveChangesAsync() > 0;
        }
    }
}