import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import GetFriends from '../Helpers/UserData';
import GetSchedules from '../Helpers/ScheduleDataRequest';
import './Friends.scss';
const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

export default function AlignItemsList() {
  const classes = useStyles();
  //const [state, setState] = React.useState([]);
  const [schedules, setSchedules] = React.useState([])
//   GetFriends.getAllUsers()
//     .then((result) => {
//         setState(result)
//     })
    GetSchedules.getAllSchedule()
        .then((resp) => {
            let response =[]
            response = resp.result
            console.log(response,"lolo")
            setSchedules(response);
        })
    .catch(err=> console.error("could not get friends",err));
     return schedules.map((schedule) => {
        return (
            <List className={classes.root}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt={`${schedule.FirstName}`} src={schedule.ProfileImage}/>
                </ListItemAvatar>
                <ListItemText
                  primary={`${schedule.Status} || ${schedule.Subject}`}
                  secondary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}
                        color="textPrimary"
                      >
                        {`${schedule.FirstName} ${schedule.LastName}`}
                        <br />
                      </Typography>
                      {schedule.Description}
                    </React.Fragment>
                  }
                />
              </ListItem>
            </List>
          );
    })
}
