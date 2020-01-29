using HangOutAndChill.DTOs;
using HangOutAndChill.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HangOutAndChill.Interfaces
{
    public interface IScheduleAppointment
    {
        IEnumerable<ScheduleAppointment> GetSchedule();
        bool AddSchedule(AddScheduleDTO addSchedule);
        bool UpdateSchedule(Guid scheduleId, ScheduleAppointment updatedSchedule);
        bool DeleteSchedule(Guid userId);
    }
}
