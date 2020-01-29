import React from 'react';
import { 
  Inject, 
  ScheduleComponent,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  MonthAgenda,
  ViewsDirective,
  ViewDirective, 
  TimelineViews, 
  TimelineMonth,
  DragAndDrop,
  Resize,
} from '@syncfusion/ej2-react-schedule';

class MyCalendar extends React.Component {
  localData = {
    dataSource: [
      {
        id:1,
        EndTime: new Date("2020-01-24T12:00:00-07:30"),
        StartTime: new Date("2020-01-24T12:00:00-06:30"),
        Subject: 'Meeting',
        // isAllDay: true,
        // RecurrenceRule: 'FREQ=DAILY; INTERVAL=1; COUNT=4'

      },
      {
        id:2,
        EndTime: new Date(),
        StartTime: new Date(),
        Subject: 'Gym'
      }
    ]
  }
  render() {
    return (
      <ScheduleComponent 
        currentView='Month'
        eventSettings={this.localData}
        height='550px'
        >
        <ViewsDirective>
          <ViewDirective option='Day'></ViewDirective>
          <ViewDirective option='Week'></ViewDirective>
          <ViewDirective option='WorkWeek'></ViewDirective>
          <ViewDirective option='Month'></ViewDirective>
          <ViewDirective option='TimelineDay'></ViewDirective>
          <ViewDirective option='TimelineMonth'></ViewDirective>
        </ViewsDirective>
        <Inject services =
          {
            [
              Day, 
              Week, 
              WorkWeek, 
              Month, 
              Agenda, 
              MonthAgenda,
              TimelineMonth,
              TimelineViews,
              DragAndDrop,
              Resize
            ]
          } 
        />
      </ScheduleComponent>
    );
  }
}
export default MyCalendar;
