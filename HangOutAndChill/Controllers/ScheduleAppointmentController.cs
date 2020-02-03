using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HangOutAndChill.Interfaces;
using HangOutAndChill.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace HangOutAndChill.Controllers
{
    [Route("api/scheduleAppointment")]
    [ApiController]
    public class ScheduleAppointmentController : ControllerBase
    {
        private readonly IScheduleAppointment _repo;

        public ScheduleAppointmentController(IScheduleAppointment repo)
        {
            _repo = repo;
        }

        // GET: api/ScheduleAppointment
        [HttpGet]
        public IActionResult Get()
        {
            var schedules = _repo.GetSchedule().Select(s => new ScheduleEventData(s.Id, s.StartTime, s.EndTime, s.Subject));

            
            return Ok(new { result = schedules, count=schedules.Count() });
        }

        // GET: api/ScheduleAppointment/5
        [HttpGet("{id}", Name = "Get")]
        public ScheduleAppointment Get(Guid userId)
        {
            return _repo.GetSchedule().FirstOrDefault();
        }

        //// POST: api/ScheduleAppointment
        //[HttpPost]
        //public void Post([FromBody] string value)
        //{
        //}

        //// PUT: api/ScheduleAppointment/5
        //[HttpPut("{id}")]
        //public void Put(int id, [FromBody] string value)
        //{
        //}

        //// DELETE: api/ApiWithActions/5
        //[HttpDelete("{id}")]
        //public void Delete(int id)
        //{
        //}
    }

    internal class ScheduleEventData
    {

        [JsonProperty("Id")]
        public Guid Id { get; }
        [JsonProperty("StartTime")]
        public DateTime StartTime { get; }
        [JsonProperty("EndTime")]
        public DateTime EndTime { get; }
        [JsonProperty("Subject")]
        public string Subject { get; }

        public ScheduleEventData(Guid id, DateTime StartTime, DateTime EndTime, string Subject)
        {
            Id = id;
            this.EndTime = EndTime;
            this.StartTime = StartTime;
            this.Subject = Subject;
        }

        public override bool Equals(object obj)
        {
            return obj is ScheduleEventData other &&
                   Id.Equals(other.Id) &&
                   StartTime == other.StartTime &&
                   EndTime == other.EndTime &&
                   Subject == other.Subject;
        }

        public override int GetHashCode()
        {
            return HashCode.Combine(Id, StartTime, EndTime, Subject);
        }
    }
}
