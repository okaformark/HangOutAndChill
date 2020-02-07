import Axios from 'axios';
 const databaseURL = 'http://localhost:62528/api';

 const addUserToDatabase = (userObject) => Axios.post(`${databaseURL}/User`, userObject);

 const getUser = (userId) => Axios.get(`${databaseURL}/User/${userId}`);

 export default { addUserToDatabase, getUser};