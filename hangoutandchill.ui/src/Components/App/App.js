import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from '../SignUp/Register';
import ButtonAppBar from '../NavBar/ButtonAppBar';
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
      </div>
    )
  }
}
export default App;
