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
            throw new NotImplementedException();
        }

        public bool DeleteSchedule(Guid userId)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<ScheduleAppointment> GetSchedule()
        {
            using var db = new SqlConnection(_connectionString);
            var sql = " select * from Schedule";

            var schedules = db.Query<ScheduleAppointment>(sql);
            return schedules;
        }

        public bool UpdateSchedule(Guid scheduleId, ScheduleAppointment updatedSchedule)
        {
            throw new NotImplementedException();
        }
    }
}
