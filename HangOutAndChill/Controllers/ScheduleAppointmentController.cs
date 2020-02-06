using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HangOutAndChill.DTOs;
using HangOutAndChill.Interfaces;
using HangOutAndChill.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace HangOutAndChill.Controllers
{
    [Route("api/scheduleAppointment")]
    [ApiController]
    public class ScheduleAppointmentController : FirebaseEnabledController
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


            return Ok(new { result = schedules, count = schedules.Count() });
        }

        //GET: api/ScheduleAppointment/5
        [HttpGet("{id}", Name = "GetSingleSchedule")]
        public ScheduleAppointment Get(Guid userId)
        {
            return _repo.GetSchedule().FirstOrDefault();
        }

        [HttpPost]
        public IActionResult UpdateData(EditParams param)
        {
            if (param.Action == "insert" || (param.Action == "batch" && param.Added.Count() > 0 )) // this block of code will execute while inserting the appointments
            {
                var value = (param.Action == "insert") ? param.Value : param.Added[0];

                DateTime startTime = value.StartTime;
                DateTime endTime = value.EndTime;
                var appointment = new AddScheduleDTO
                {
                    StartTime = startTime,
                    EndTime = endTime,
                    Subject = value.Subject,
                    Location = value.Location,
                    Description = value.Description,
                    UserFirebaseId = value.UserFirebaseId
                };

                _repo.AddSchedule(appointment);
            }
            if (param.Action == "update" || (param.Action == "batch" && param.Changed.Count() > 0)) // this block of code will execute while updating the appointment
            {
                var value = (param.Action == "update") ? param.Value : param.Changed[0];

                DateTime startTime = value.StartTime;
                DateTime endTime = value.EndTime;

                var appointment = new AddScheduleDTO
                {
                    StartTime = startTime,
                    EndTime = endTime,
                    Subject = value.Subject,
                    Location = value.Location,
                    Description = value.Description,
                    UserFirebaseId = value.UserFirebaseId
                };

                _repo.UpdateSchedule(value.Id, appointment);

            }
            //    if (param.Action == "remove" || (param.Action == "batch" && param.Deleted.Count()>0)) // this block of code will execute while removing the appointment
            //    {
            //        if (param.Action == "remove")
            //        {
            //            int key = Convert.ToInt32(param.Key);
            //            ScheduleEventData appointment = db.ScheduleEventDatas.Where(c => c.Id == key).FirstOrDefault();
            //            if (appointment != null) db.ScheduleEventDatas.DeleteOnSubmit(appointment);
            //        }
            //        else
            //        {
            //            foreach (var apps in param.Deleted)
            //            {
            //                ScheduleEventData appointment = db.ScheduleEventDatas.Where(c => c.Id == apps.Id).FirstOrDefault();
            //                if (apps != null) db.ScheduleEventDatas.DeleteOnSubmit(appointment);
            //            }
            //        }
            //        db.SubmitChanges();
            //    }
            //    var data = db.ScheduleEventDatas.ToList();
            //    return Json(data, JsonRequestBehavior.AllowGet);
            return Ok(_repo.GetSchedule().Select(s => new ScheduleEventData(s.Id, s.StartTime, s.EndTime, s.Subject)));
        }

        public class EditParams
        {
            public string Key { get; set; }
            public string Action { get; set; }
            public List<ScheduleEventData> Added { get; set; }
            public List<ScheduleEventData> Changed { get; set; }
            public List<ScheduleEventData> Deleted { get; set; }
            public ScheduleEventData Value { get; set; }
        }

        // POST: api/ScheduleAppointment
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

    public class ScheduleEventData
    {

        [JsonProperty("Id")]
        public Guid Id { get; set; }
        [JsonProperty("StartTime")]
        public DateTime StartTime { get; set; }
        [JsonProperty("EndTime")]
        public DateTime EndTime { get; set; }
        [JsonProperty("Subject")]
        public string Subject { get; set; }
        public string Location { get; set; }
        public string Description { get; set; }
        public bool IsAllDay { get; set; }
        public object StartTimezone { get; set; }
        public object EndTimezone { get; set; }
        public User UserFirebaseId { get; set; }

        public ScheduleEventData()
        {

        }

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
