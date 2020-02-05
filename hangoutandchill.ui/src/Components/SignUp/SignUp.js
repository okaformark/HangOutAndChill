import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import Auth from '../Auth/Auth';
import userData from '../Helpers/UserData';

export class SignUp extends Component {
    state = {
        user: {
          email: '',
          password: '',
          firstName: '',
          lastName: '', 
          firebaseUid: ''
        },
      }

      signUpClickEvent = e => {
        const { user } = this.state;
          e.preventDefault();
        Auth.registerUser(user)
            .then(() =>{
                console.log(user,"pop");
                const userObject = {
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                    firebaseUid: firebase.auth().currentUser.uid
                }
                userData.addUserToDatabase(userObject)
                .then(() => {
                    userData.getUser(user.firebaseUid)
                        .then((response) => { console.log(response);})
                })
            })
      };

      firstNameChange = e => {
        const tempUser = { ...this.state.user };
        tempUser.firstName = e.target.value;
        this.setState({ user: tempUser });
      };
    
      lastNameChange = e => {
        const tempUser = { ...this.state.user };
        tempUser.lastName = e.target.value;
        this.setState({ user: tempUser });
      };
    
      emailChange = e => {
        const tempUser = { ...this.state.user };
        tempUser.email = e.target.value;
        this.setState({ user: tempUser });
      };
    
      passwordChange = e => {
        const tempUser = { ...this.state.user };
        tempUser.password = e.target.value;
        this.setState({ user: tempUser });
      };
    
    render() {
        const { user } = this.state;
        return (
            <div className="Register">
                <div id="login-form">
                <h1 className="text-center">Register</h1>
                <form className="form-horizontal col-sm-6 col-sm-offset-3">
                    <div className="form-group">
                    <label htmlFor="inputFirstName" className="col-sm-4 control-label">
                        First Name:
                    </label>
                    <div className="col-sm-8">
                        <input
                        type="name"
                        className="form-control"
                        id="inputFirstName"
                        placeholder="First Name"
                        value={user.firstName}
                        onChange={this.firstNameChange}
                        />
                    </div>
                    <label htmlFor="inputLastName" className="col-sm-4 control-label">
                        Last Name:
                    </label>
                    <div className="col-sm-8">
                        <input
                        type="name"
                        className="form-control"
                        id="inputLastName"
                        placeholder="Last Name"
                        value={user.lastName}
                        onChange={this.lastNameChange}
                        />
                    </div>
                    <label htmlFor="inputEmail" className="col-sm-4 control-label">
                        Email:
                    </label>
                    <div className="col-sm-8">
                        <input
                        type="email"
                        className="form-control"
                        id="inputEmail"
                        placeholder="Email"
                        value={user.email}
                        onChange={this.emailChange}
                        />
                    </div>
                    </div>
                    <div className="form-group">
                    <label htmlFor="inputPassword" className="col-sm-4 control-label">
                        Password:
                    </label>
                    <div className="col-sm-8">
                        <input
                        type="password"
                        className="form-control"
                        id="inputPassword"
                        placeholder="Password"
                        value={user.password}
                        onChange={this.passwordChange}
                        />
                    </div>
                    </div>
                    <div className="form-group">
                    <div className="col-sm-12 text-center">
                        <Link to="/Login">Need to Login?</Link>
                    </div>
                    </div>
                    <div className="form-group">
                    <div className="col-sm-12">
                        <button
                        type="submit"
                        className="btn btn-default col-xs-12"
                        onClick={this.signUpClickEvent}
                        >
                        Register
                        </button>
                    </div>
                    </div>
                </form>
                </div>
      </div>
        )
    }
}

export default SignUp
