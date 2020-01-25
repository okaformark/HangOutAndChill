import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from '../SignUp/Register';
import ButtonAppBar from '../NavBar/ButtonAppBar';
import MyCalendar from '../Calender/MyCalender'
import './App.scss';

class App extends React.Component {
  state = {
    loadComponent: false
  }
handleOnClickEvent=()=>{
  return <Register />
}

  render (){
    return (
      <div className = "App">
        <ButtonAppBar
          handleOnClickEvent = {this.handleOnClickEvent()}
        />
        {/* <Register /> */}
        <MyCalendar />
      </div>
    )
  }
}
export default App;
