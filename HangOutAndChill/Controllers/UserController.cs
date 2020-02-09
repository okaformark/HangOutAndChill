using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HangOutAndChill.DTOs;
using HangOutAndChill.Interfaces;
using HangOutAndChill.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace HangOutAndChill.Controllers
{
    [Route("api/User")]
    [ApiController]
    public class UserController : FirebaseEnabledController
    {

        private readonly IUser _repo;

        public UserController(IUser repo)
        {
            _repo = repo;
        }
        // GET: api/User
        [HttpGet]
        public IEnumerable<User> Get()
        {
            return _repo.GetAllUsers();
        }

        // GET: api/User/5
        //[Authorize]
        [HttpGet("{UserFirebaseId}")]
        public User GetLoggedInUser(string UserFirebaseId)
        {
            return _repo.GetAllUsers().FirstOrDefault(user => user.FirebaseUid == UserFirebaseId );
        }

        // POST: api/User
        [HttpPost]
        public IActionResult CreateUser(UserDTO user)
        {
            return Ok(_repo.CreateUser(user));
            
        }

        // PUT: api/User/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
    public abstract class FirebaseEnabledController : ControllerBase
    {
        
        protected string UserFirebaseId => User.FindFirst(x => x.Type == "user_id").Value;
    }

}
