// import React, { Component } from 'react';
// import {Link} from 'react-router-dom';
// import firebase from 'firebase/app';
// import 'firebase/auth';
// import Auth from '../Auth/Auth';
// import Button from '@material-ui/core/Button';
// import userData from '../Helpers/UserData';

// export class SignUp extends Component {
//     state = {
//         user: {
//           email: '',
//           password: '',
//           firstName: '',
//           lastName: '', 
//           firebaseUid: ''
//         },
//       }

//       signUpClickEvent = e => {
//         const { user } = this.state;
//           e.preventDefault();
//         Auth.registerUser(user)
//             .then(() =>{
//                 const userObject = {
//                     firstName: user.firstName,
//                     lastName: user.lastName,
//                     email: user.email,
//                     firebaseUid: firebase.auth().currentUser.uid
//                 }
//                 console.log(userObject,"pop");
//                 userData.addUserToDatabase(userObject)
//                 .then(() => {
//                     userData.getUser(userObject.firebaseUid)
//                         .then((resp) => { 
//                             console.log(resp,"rrr");
//                             const userSignUpObject = {
//                                 firstName: resp.data.FirstName,
//                                 lastName: resp.data.LastName,
//                                 email: resp.data.Email,
//                                 firebaseUid:resp.data.FirebaseUid
//                             }
//                             this.props.getUser(userSignUpObject)
//                         })
//                 })
//             })
//       };

//       firstNameChange = e => {
//         const tempUser = { ...this.state.user };
//         tempUser.firstName = e.target.value;
//         this.setState({ user: tempUser });
//       };
    
//       lastNameChange = e => {
//         const tempUser = { ...this.state.user };
//         tempUser.lastName = e.target.value;
//         this.setState({ user: tempUser });
//       };
    
//       emailChange = e => {
//         const tempUser = { ...this.state.user };
//         tempUser.email = e.target.value;
//         this.setState({ user: tempUser });
//       };
    
//       passwordChange = e => {
//         const tempUser = { ...this.state.user };
//         tempUser.password = e.target.value;
//         this.setState({ user: tempUser });
//       };
    
//     render() {
//         const { user } = this.state;
//         return (
//         <div className="container">
//             <div className="col">
//             <div className="Register">
//                 <div id="login-form">
//                 <h1 className="text-center"></h1>
//                 <form className="form-horizontal col-sm-offset-3" id="test">
//                     <div className="form-group">
//                     <label htmlFor="inputFirstName" className="col-sm-4 control-label">
//                         First Name:
//                     </label>
//                     <div className="col-sm-8">
//                         <input
//                         type="name"
//                         className="form-control"
//                         id="inputFirstName"
//                         placeholder="First Name"
//                         value={user.firstName}
//                         onChange={this.firstNameChange}
//                         />
//                     </div>
//                     <label htmlFor="inputLastName" className="col-sm-4 control-label">
//                         Last Name:
//                     </label>
//                     <div className="col-sm-8">
//                         <input
//                         type="name"
//                         className="form-control"
//                         id="inputLastName"
//                         placeholder="Last Name"
//                         value={user.lastName}
//                         onChange={this.lastNameChange}
//                         />
//                     </div>
//                     <label htmlFor="inputEmail" className="col-sm-4 control-label">
//                         Email:
//                     </label>
//                     <div className="col-sm-8">
//                         <input
//                         type="email"
//                         className="form-control"
//                         id="inputEmail"
//                         placeholder="Email"
//                         value={user.email}
//                         onChange={this.emailChange}
//                         />
//                     </div>
//                     </div>
//                     <div className="form-group">
//                     <label htmlFor="inputPassword" className="col-sm-4 control-label">
//                         Password:
//                     </label>
//                     <div className="col-sm-8">
//                         <input
//                         type="password"
//                         className="form-control"
//                         id="inputPassword"
//                         placeholder="Password"
//                         value={user.password}
//                         onChange={this.passwordChange}
//                         />
//                     </div>
//                     </div>
//                     <div className="form-group">
//                     <div className="col-sm-12 text-center">
//                         <Link to="/Login">Need to Login?</Link>
//                     </div>
//                     </div>
//                     <div className="form-group">
//                     <div className="col-sm-12">
//                         <Button
//                         type="submit"
//                         className="btn btn-default col-xs-12"
//                         onClick={this.signUpClickEvent}
//                         >
//                         Register
//                         </Button>
//                     </div>
//                     </div>
//                 </form>
//                 </div>
//       </div>
//             </div>
//         </div>
// //          <div className = "container col">
// //         <form className="text-center border border-light p-5" action="#!">
// //             <p className="h4 mb-4">Sign up</p>

// //             <div className="form-row mb-4">
// //                 <div className="col">
// //                     <input type="text" id="defaultRegisterFormFirstName" className="form-control" placeholder="First name" />
// //                 </div>
// //                 <div className="col">
// //                     <input type="text" id="defaultRegisterFormLastName" className="form-control" placeholder="Last name" />
// //                 </div>
// //             </div>

// //             <input type="email" id="defaultRegisterFormEmail" className="form-control mb-4" placeholder="E-mail" />

// //             <input type="password" id="defaultRegisterFormPassword" className="form-control" placeholder="Password" aria-describedby="defaultRegisterFormPasswordHelpBlock" />
// //             <small id="defaultRegisterFormPasswordHelpBlock" className="form-text text-muted mb-4">
// //                 {/* At least 8 characters and 1 digit */}
// //             </small>

// //             <input type="text" id="defaultRegisterPhonePassword" className="form-control" placeholder="Phone number" aria-describedby="defaultRegisterFormPhoneHelpBlock" />
// //             <small id="defaultRegisterFormPhoneHelpBlock" className="form-text text-muted mb-4">
// //                 {/* Optional - for two step authentication */}
// //             </small>
// //             <div className="custom-control custom-checkbox">
// //                 <input type="checkbox" className="custom-control-input" id="defaultRegisterFormNewsletter" />
// //                 <label className="custom-control-label" for="defaultRegisterFormNewsletter">Subscribe to our newsletter</label>
// //             </div>
// //             <Button className="btn btn-info my-4 btn-block" type="submit">Sign in</Button>

// //             {/* <p>or sign up with:</p> */}
// //             <hr />
// //             <p>By clicking
// //                 <em>Sign up</em> you agree to our terms of service
// //             </p>
// //     </form>
// // </div>   
//         )
//     }
// }

// export default SignUp
