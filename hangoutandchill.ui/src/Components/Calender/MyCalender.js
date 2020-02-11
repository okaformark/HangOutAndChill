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
import userData from '../Helpers/UserData';
import firebase from 'firebase/app'
import 'firebase/auth';
import UserData from '../Helpers/UserData';

class MyCalendar extends React.Component {

  state = {
    schedule:[{}]
  }

//  getUser = () => {
//   userData.getUser(firebase.auth().currentUser.uid)
//   .then((resp) => { 
//       console.log(resp,"ooooo");
//       const userSignUpObject = {
//           userId: resp.data.Id,
//           firstName: resp.data.FirstName,
//           lastName: resp.data.LastName,
//       }
//     userData.addUserIdtoScheduleTable(userSignUpObject)
//       .then((resp)=>{
//         console.error(resp,"patch")
//       })
//       .catch(err=>console.error("did not patch",err))
//   })
//  }

  dataManager = new DataManager({
    url: `http://localhost:62528/api/scheduleAppointment/${UserData.getSessionUser().userId}`, // 'controller/actions'
    crudUrl: `http://localhost:62528/api/scheduleAppointment/${UserData.getSessionUser().userId}`,
    adaptor: new UrlAdaptor({headers:[{authentication:"bearer " + sessionStorage.getItem('token')}]}),
    crossDomain: true,
    IsReadonly: false
  });

  // eventTemplate = (props) => {
  // return (<div className="template-wrap">{props.Subject}</div>)
  // }

  render() {
    return (
      <ScheduleComponent 
        currentView='Month'
        eventSettings={{dataSource: this.dataManager}}
        height= "550px" width="800px"
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
