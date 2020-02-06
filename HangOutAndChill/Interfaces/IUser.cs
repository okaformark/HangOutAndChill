using HangOutAndChill.DTOs;
using HangOutAndChill.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HangOutAndChill.Interfaces
{
    public interface IUser
    {
        bool CreateUser(UserDTO user);
        IEnumerable<User> GetAllUsers();
    }
}
