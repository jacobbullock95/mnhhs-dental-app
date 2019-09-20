using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using DentalApp.API.Data;
using DentalApp.API.Dtos;
using DentalApp.API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;

namespace DentalApp.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IAuthRepository _repo;
        private readonly IConfiguration _config;

        private readonly IMapper _mapper;

        public AuthController(IAuthRepository repo, IConfiguration config, IMapper mapper)
        {
            _mapper = mapper;
            _config = config;
            _repo = repo;

        }

        [HttpPost("register")]
        public async Task<IActionResult> Register(UserForRegisterDto userForRegisterDto)
        {

            userForRegisterDto.Username = userForRegisterDto.Username.ToLower();

            if (await _repo.UserExists(userForRegisterDto.Username))
            {
                return BadRequest("Username already exists..");
            }

            var userToCreate = _mapper.Map<User>(userForRegisterDto);

            var createdUser = await _repo.Register(userToCreate, userForRegisterDto.Password);

            var userToReturn = _mapper.Map<UserForDetailedDto>(createdUser);

            return CreatedAtRoute("GetUser", new {controller = "Users", id = createdUser.Id}, userToReturn);
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login(UserForLoginDto userForLoginDto)
        {
            
            //look for user in db
            var userFromRepo = await _repo.Login(userForLoginDto.Username.ToLower(), userForLoginDto.Password);

            //if no user or incorrect p/w
            if (userFromRepo == null)
            {
                return Unauthorized();
            }

            //claims to add to JWT token
            var claims = new[]{
                new Claim(ClaimTypes.NameIdentifier, userFromRepo.Id.ToString()),
                new Claim(ClaimTypes.Name, userFromRepo.Username)
            };

            //create key
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config.GetSection("AppSettings:Token").Value));

            //use key to create credentials by hashing
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);

            //Adds nbf, exp and iat | userID and Username | Secret auth key
            var tokenDescriptor = new SecurityTokenDescriptor(){
                Subject = new ClaimsIdentity(claims),
                Expires = DateTime.Now.AddDays(1),
                SigningCredentials = creds
            };

            //create Handler for above info
            var tokenHandler = new JwtSecurityTokenHandler();

            //create token by passing descriptor into Handler 
            var token = tokenHandler.CreateToken(tokenDescriptor);

            //return 'Ok' by sending the token along http response, suing
            // token handler to write the token to local storage in JSON
            return Ok(new {
                token = tokenHandler.WriteToken(token)
            });

        }
    }
}