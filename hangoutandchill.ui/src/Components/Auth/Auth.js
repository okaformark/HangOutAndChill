// import axios from 'axios';

// import firebase from 'firebase/app';
// import 'firebase/auth';

// const baseUrl = 'http://localhost:62528/api';

// const registerUser = async (user) => {

//   //sub out whatever auth method firebase provides that you want to use.
//   const cred = await firebase.auth().createUserWithEmailAndPassword(user.email, user.password);
//     //get email from firebase
//     let userInfo = { email: cred.user.email };
//     //get token from firebase
//     cred.user.getIdToken()
//         //save the token to the session storage
//         .then(token => sessionStorage.setItem('token', token))
//         //save the user to the the api
//         .then(() => axios.post(`${baseUrl}/users`, userInfo));
// };

// const loginUser = async (user) => {
//   //sub out whatever auth method firebase provides that you want to use.
//   const cred = await firebase.auth().signInWithEmailAndPassword(user.email, user.password);
//     //get token from firebase
//     cred.user.getIdToken()
//         //save the token to the session storage
//         .then(token => sessionStorage.setItem('token', token));
// };

// const logoutUser = () => {
//   return firebase.auth().signOut();
// };

// const getEmail = () => {
//   return firebase.auth().currentUser.email;
// };

// export default {getEmail, loginUser, logoutUser, registerUser};
import React, { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import app from '../Helpers/FbConnection';

 export  const AuthContext = React.createContext();

 export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState({});
    
    useEffect(() => {
       firebase.default.auth().onAuthStateChanged(setCurrentUser)
    }, []);

    return (
        <AuthContext.Provider
            value = {{currentUser}}
        >
        {children}
        </AuthContext.Provider>
    )
}
