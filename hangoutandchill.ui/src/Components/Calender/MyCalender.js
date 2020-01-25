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
} from '@syncfusion/ej2-react-schedule';

class MyCalendar extends React.Component {
  localData = {
    dataSource: [
      {
        EndTime: new Date(),
        StartTime: new Date()
      },
      {
        EndTime: new Date(),
        StartTime: new Date()
      }
    ]
  }

  render() {
    return (
      <ScheduleComponent 
        currentView='Month'
        eventSettings={this.localData}
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
              TimelineViews
            ]
          } 
        />
      </ScheduleComponent>
    );
  }
}
export default MyCalendar;