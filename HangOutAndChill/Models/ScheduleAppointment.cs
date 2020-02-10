using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HangOutAndChill.Models
{
    public class ScheduleAppointment
    {
        //public Guid Id { get; set; }
        
        //public string Status { get; set; }
        //public string Subject { get; set; }
        //public string Description { get; set; }
        //public DateTime StartTime { get; set; }
        //public DateTime EndTime { get; set; }
        //public string Location { get; set; }
        //public string FirstName { get; set; }
        //public string LastName { get; set; }
        //public string ProfilePic { get; set; }
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

    }
}
