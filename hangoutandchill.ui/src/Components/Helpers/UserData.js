import Axios from 'axios';
 const databaseURL = 'http://localhost:62528/api';

 const addUserToDatabase = (userObject) => Axios.post(`${databaseURL}/User`, userObject);

 const getUser = (userId) => Axios.get(`${databaseURL}/User/${userId}`);

 const getAllUsers = () => new Promise((resolve, reject) => {
    Axios.get(`${databaseURL}/User`)
        .then(result => {
            let users = [];
            users = result.data;
            // console.log (result.data,'hu');
            // console.log (users,'ho');
            resolve(users);
        })
        .catch( err => console.error(reject, err));

})

 export default { addUserToDatabase, getAllUsers, getUser};