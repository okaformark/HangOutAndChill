import React from 'react';
import {
  BrowserRouter,
  Route,
  Redirect,
  Switch,
}
  from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import FbConnection from '../Helpers/FbConnection';
import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonAppBar from '../NavBar/ButtonAppBar';
import Login from '../Login/Login';
import Auth from '../Auth/Auth';
import Home from '../Home/Home';
import './App.scss';
import MyCalendar from '../Calender/MyCalender';
import SignUp from '../SignUp/SignUp';
import Register from '../SignUp/Register';


FbConnection();
const PublicRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = props => (authed === false
    ? (<Component authed={authed} {...props} {...rest} />)
    : (<Redirect to={{ pathname: '/Home', state: { from: props.location } }} />));
  return <Route {...rest} render={props => routeChecker(props)} />;
};
const PrivateRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = props => (authed === true
    ? (<Component authed={authed} {...props} {...rest} />)
    : (<Redirect to={{ pathname: '/auth', state: { from: props.location } }} />));
  return <Route {...rest} render={props => routeChecker(props)} />;
};

class App extends React.Component {

  state = {
    authed: false,
    User: {}
  }
  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authed: true });
      } else {
        this.setState({ authed: false });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  // getUser = (tempUser) => {
  //   this.setState({User: tempUser})
  // }
  render (){
    const { authed } = this.state;
    return (
      <div className = "App">
        <BrowserRouter>
          <ButtonAppBar
          />
         <Home />
         <SignUp />
          <>
          <div className="Container">
            <Switch>
              <PublicRoute 
              path='/LandingPage'
              authed={authed}
              />
              <PublicRoute 
                path='/SignUp'
                authed={authed}
                component={SignUp}
                // getUser={this.getUser}
              />
              <PublicRoute 
                path='/Login'
                authed={authed}
              />
              <PrivateRoute
              path='/Home'
              authed={authed}
              component={Home}
              />
              <PrivateRoute
              path='/Register'
              authed={authed}
              component={Register}
              />
              <PrivateRoute 
                path='/MyCalender'
                authed={authed}
                component={MyCalendar}
              />
            </Switch>
          </div> 
          </>
        </BrowserRouter>
      </div>
    )
  }
}
export default App;
