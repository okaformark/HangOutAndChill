import Axios from 'axios';

const databaseURL = 'http://localhost:62528/api';

const getAllSchedule = () => new Promise((resolve, reject) => {
    Axios.get(`${databaseURL}/scheduleAppointment`)
        .then(result => {
            let schedules = [];
            schedules = result.data;
            console.log (result.data,'hu');
            console.log (schedules,'hu');
            resolve(schedules);
        })
        .catch( err => console.error(reject, err));

})

export default { getAllSchedule };
