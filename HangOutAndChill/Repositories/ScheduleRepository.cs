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
    public class ScheduleRepository : IScheduleAppointment
    {
        string _connectionString = "Server=localhost;Database=testing;Trusted_Connection=True;";
        public bool AddSchedule(AddScheduleDTO addSchedule)
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"INSERT INTO [dbo].[Schedule]
                           (
                            [UserId]
                           ,[Status]
                           ,[Subject]
                           ,[Description]
                           ,[StartTime]
                           ,[EndTime]
                           ,[Location])
                     VALUES
                           (
                           @UserId
                           , @Status
                           , @Subject
                           , @Description
                           , @StartTime
                           , @EndTime
                           , @Location)";

            return db.Execute(sql, addSchedule) == 1;
        }


        public bool DeleteSchedule(Guid userId)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<ScheduleAppointment> GetSchedule()
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"select * from Schedule";

            var schedules = db.Query<ScheduleAppointment>(sql);
            return schedules;
        }

        public bool UpdateSchedule(Guid scheduleId, AddScheduleDTO updatedSchedule)
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"UPDATE [dbo].[Schedule]
                   SET
                      [UserId] = @UserId
                      ,[Status] = @Status
                      ,[Subject] = @Subject
                      ,[Description] = @Description
                      ,[StartTime] = @StartTime
                      ,[EndTime] = @EndTime
                      ,[Location] = @Location
                 WHERE Id = @Id";
            updatedSchedule.Id = scheduleId;
            return db.Execute(sql, updatedSchedule) == 1;

        }
    }
}
