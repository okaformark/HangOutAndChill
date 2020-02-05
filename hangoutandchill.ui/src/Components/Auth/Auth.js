import axios from 'axios';

import firebase from 'firebase/app';
import 'firebase/auth';

const baseUrl = 'http://localhost:62528/api';

// interceptors work by changing the outbound request before the xhr is sent 
// or by changing the response before it's returned to our .then() method.
axios.interceptors.request.use(function (request) {
  const token = sessionStorage.getItem('token');

  if (token != null) {
      request.headers.Authorization = `Bearer ${token}`;
  }

  return request;
}, function (err) {
  return Promise.reject(err);
});

const registerUser = async (user) => {

  //sub out whatever auth method firebase provides that you want to use.
  const cred = await firebase.auth().createUserWithEmailAndPassword(user.email, user.password);
    //get email from firebase
    let userInfo = { email: cred.user.email };
    //get token from firebase
    cred.user.getIdToken()
        //save the token to the session storage
        .then(token => sessionStorage.setItem('token', token))
        //save the user to the the api
        .then(() => axios.post(`${baseUrl}/users`, userInfo));
};

const loginUser = async (user) => {
  //sub out whatever auth method firebase provides that you want to use.
  const cred = await firebase.auth().signInWithEmailAndPassword(user.email, user.password);
    //get token from firebase
    cred.user.getIdToken()
        //save the token to the session storage
        .then(token => sessionStorage.setItem('token', token));
};

const logoutUser = () => {
  return firebase.auth().signOut();
};

const getEmail = () => {
  return firebase.auth().currentUser.email;
};

export default {getEmail, loginUser, logoutUser, registerUser};
