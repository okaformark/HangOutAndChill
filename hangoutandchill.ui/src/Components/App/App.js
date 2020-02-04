import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonAppBar from '../NavBar/ButtonAppBar';
import MyCalendar from '../Calender/MyCalender'
import './App.scss';

class App extends React.Component {
  render (){
    return (
      <div className = "App">
        <ButtonAppBar 
        />
        <MyCalendar />
      </div>
    )
  }
}
export default App;
