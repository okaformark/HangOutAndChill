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
 import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';
import getAllSchedules from '../Helpers/ScheduleDataRequest';

class MyCalendar extends React.Component {

  state = {
    schedule:[{}]
  }

  // getSchedules = () => {
  //   getAllSchedules.getAllSchedule()
  //     .then(result => {
  //       const resp= result;
  //       this.setState({schedule: [...resp.result]}, () => {
  //         console.error(this.state.schedule, "schedule")
  //       })
  //     })
  //     .catch(err => console.error('cannot load schedules', err))
  // }

  // componentDidMount () {
  //   this.getSchedules();
  // }

  dataManager = new DataManager({
    url: 'http://localhost:62528/api/scheduleAppointment', // 'controller/actions'
    crudUrl: 'http://localhost:62528/api/scheduleAppointment',
    adaptor: new UrlAdaptor({headers:[{authentication:"bearer " + sessionStorage.getItem('token')}]}),
    crossDomain: true,
    IsReadonly: true
  });

  eventTemplate = (props) => {
  return (<div className="template-wrap">{props.Subject}</div>)
  }

  render() {
    const schedules = this.state.schedule;

    return (
      <ScheduleComponent 
        currentView='Month'
        eventSettings={{dataSource: this.dataManager, template:this.eventTemplate}}
        height= 'auto'
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
