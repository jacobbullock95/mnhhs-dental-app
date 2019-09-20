using AutoMapper;
using DentalApp.API.Dtos;
using DentalApp.API.Models;

namespace DentalApp.API.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<User, UserForListDto>();
            CreateMap<User, UserForDetailedDto>();
            CreateMap<ConsentForm, ConsentFormsForDetailedDto>();
            CreateMap<UserForUpdateDto, User>();
            CreateMap<UserForRegisterDto, User>();
        }
    }
}