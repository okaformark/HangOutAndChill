using Dapper;
using HangOutAndChill.DTOs;
using HangOutAndChill.Interfaces;
using HangOutAndChill.Models;
using Microsoft.Data.SqlClient;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HangOutAndChill.Repositories
{
    public class UserController : IUser

    {
        string _connectionString = "Server=localhost;Database=testing;Trusted_Connection=True;";
        public bool CreateUser(UserDTO user)
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"INSERT INTO [dbo].[User]
                           (
                           [FirstName]
                           ,[LastName]
                           ,[Email]
                           ,[firebaseUid])
                     VALUES
                           (
                           @FirstName
                           ,@LastName
                           ,@Email
                            ,@FirebaseUid)";
            return db.Execute(sql, user) == 1;
        }

        public IEnumerable<User> GetAllUsers()
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"select * from [User]";
            return db.Query<User>(sql);
        }
    }
}
