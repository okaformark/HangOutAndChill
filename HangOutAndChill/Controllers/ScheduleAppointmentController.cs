using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HangOutAndChill.DTOs;
using HangOutAndChill.Interfaces;
using HangOutAndChill.Models;
using HangOutAndChill.Repositories;
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
        public IActionResult/*IEnumerable<ScheduleAppointment> */Get()
        {
            var schedules = _repo.GetSchedule().Select(s => new ScheduleEventData(s.Id, s.UserId, s.Status, s.Subject, s.Description,s.StartTime, s.EndTime, s.FirstName, s.LastName, s.ProfileImage) /*{ IsReadonly = s.Id != userId }*/);

            //return schedules;
            return Ok(new { result = schedules, count = schedules.Count() });
        }

        //GET: api/ScheduleAppointment/5
        [HttpGet("{id}", Name = "GetSingleSchedule")]
        public ScheduleAppointment GetSingle(Guid userId)
        {
            return _repo.GetSchedule().FirstOrDefault(s => s.UserId == userId);
        }

        [HttpPost("{userId}")]
        public IActionResult UpdateData(EditParams param, Guid userId)
        {
            if (param.Action == "insert" || (param.Action == "batch" && param.Added.Count() > 0 )) // this block of code will execute while inserting the appointments
            {
                var value = (param.Action == "insert") ? param.Value : param.Added[0];

                DateTime startTime = value.StartTime;
                DateTime endTime = value.EndTime;
                var appointment = new AddScheduleDTO
                {
                    UserId = userId,
                    StartTime = startTime,
                    EndTime = endTime,
                    Subject = value.Subject,
                    Location = value.Location,
                    Description = value.Description,
                    UserFirebaseId = value.UserFirebaseId,
                    isReadonly = true
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
                    UserFirebaseId = value.UserFirebaseId,
                    isReadonly = true
                };

                _repo.UpdateSchedule(value.Id, appointment);

            }
            if (param.Action == "remove" || (param.Action == "batch" && param.Deleted.Count() > 0)) // this block of code will execute while removing the appointment
            {
                //if (param.Action == "remove")
                //{
                //    int key = Convert.ToInt32(param.Key);
                //    ScheduleEventData appointment = db.ScheduleEventDatas.Where(c => c.Id == key).FirstOrDefault();
                //    if (appointment != null) db.ScheduleEventDatas.DeleteOnSubmit(appointment);
                //}
                //else
                //{
                //    foreach (var apps in param.Deleted)
                //    {
                //        ScheduleEventData appointment = db.ScheduleEventDatas.Where(c => c.Id == apps.Id).FirstOrDefault();
                //        if (apps != null) db.ScheduleEventDatas.DeleteOnSubmit(appointment);
                //    }
                //}
                //db.SubmitChanges();
                var value = (param.Action == "remove") ? param.Value : param.Deleted[0];
                _repo.DeleteSchedule(value.Id);
            }
            //var data = db.ScheduleEventDatas.ToList();
            //return Json(data, JsonRequestBehavior.AllowGet);
            return Ok(_repo.GetSchedule().Select(s => new ScheduleEventData(s.Id, s.UserId, s.Status, s.Subject, s.Description, s.StartTime, s.EndTime, s.FirstName, s.LastName, s.ProfileImage) { IsReadonly = s.UserId != userId }));
        }

        public class EditParams
        {
            public string Key { get; set; }
            public string Action { get; set; }
            public List<ScheduleEventData> Added { get; set; }
            public List<ScheduleEventData> Changed { get; set; }
            public List<ScheduleEventData> Deleted { get; set; }
            public ScheduleEventData Value { get; set; }
            public bool IsReadonly { get; set; }
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
        public Guid Id { get; set; }
        public Guid UserId { get; set; }
        public string Status { get; set; }
        public string Subject { get; set; }
        public string Description { get; set; }
        public DateTime StartTime { get; set; }
        public DateTime EndTime { get; set; }
        public string Location { get; set; }
        public bool IsAllDay { get; set; }
        public bool IsReadonly { get; set; }
        public object StartTimezone { get; set; }
        public object EndTimezone { get; set; }
        public User UserFirebaseId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string ProfileImage { get; set; }

        public ScheduleEventData()
        {

        }

        public ScheduleEventData(Guid id,Guid UserId, string Status, string Subject, string Description, DateTime StartTime, DateTime EndTime,string Location, string FirstName, string LastName, string ProfilePic)
        {
            Id = id;
            this.UserId = UserId;
            this.EndTime = EndTime;
            this.Location = Location;
            this.StartTime = StartTime;
            this.Subject = Subject;
            this.FirstName = FirstName;
            this.LastName = LastName;
            this.ProfileImage = ProfilePic;
            this.Description = Description;
            this.Status = Status;
        }

        public ScheduleEventData(Guid id, Guid userId, string status, string subject, string description, DateTime startTime, DateTime endTime, string firstName, string lastName, string profilePic)
        {
            Id = id;
            UserId = userId;
            Status = status;
            Subject = subject;
            Description = description;
            StartTime = startTime;
            EndTime = endTime;
            FirstName = firstName;
            LastName = lastName;
            ProfileImage = profilePic;
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
