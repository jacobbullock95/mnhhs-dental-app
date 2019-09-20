using System;
using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;
using AutoMapper;
using DentalApp.API.Data;
using DentalApp.API.Dtos;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace DentalApp.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClinicsController : ControllerBase
    {
        private readonly IDentalRepository _repo;
        public ClinicsController(IDentalRepository repo)
        {
            _repo = repo;

        }

        [HttpGet]
        public async Task<IActionResult> GetClinics()
        {
            var clinics = await _repo.GetClinics();
            return Ok(clinics);
        }

        [HttpGet("{id}", Name = "GetClinic")]
        public async Task<IActionResult> GetClinic(int id)
        {
            var clinic = await _repo.GetClinic(id);
            return Ok(clinic);
        }

    }
}