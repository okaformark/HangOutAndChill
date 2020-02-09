import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
// import {Link} from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import Auth from '../Auth/Auth';
import userData from '../Helpers/UserData';

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));



export default function SignUp() {
  const classes = useStyles();
  const [user, setUser] = React.useState([
      {
        email: '',
        password: '',
        firstName: '',
        lastName: '', 
        firebaseUid: '' 
      }
  ])

 const signUpClickEvent = e => {
      e.preventDefault();
    Auth.registerUser(user)
        .then(() =>{
            const userObject = {
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                firebaseUid: firebase.auth().currentUser.uid
            }
            console.log(userObject,"pop");
            userData.addUserToDatabase(userObject)
            .then(() => {
                userData.getUser(userObject.firebaseUid)
                    .then((resp) => { 
                        console.log(resp,"rrr");
                        const userSignUpObject = {
                            firstName: resp.data.FirstName,
                            lastName: resp.data.LastName,
                            email: resp.data.Email,
                            firebaseUid:resp.data.FirebaseUid
                        }
                        this.props.getUser(userSignUpObject)
                    })
            })
        })
  };

   const firstNameChange = e => {
        const tempUser = { ...user };
        tempUser.firstName = e.target.value;
        setUser(tempUser);
    };

    const lastNameChange = e => {
        const tempUser = { ...user };
        tempUser.lastName = e.target.value;
        setUser(tempUser)
    };

    const emailChange = e => {
        const tempUser = { ...user };
        tempUser.email = e.target.value;
        setUser(tempUser);
    };

    const passwordChange = e => {
        const tempUser = { ...user };
        tempUser.password = e.target.value;
        setUser(tempUser);
    };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                placeholder="First Name"
                defaultValue={user.firstName}
                onChange={firstNameChange}

              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                placeholder="Last Name"
                defaultValue={user.lastName}
                onChange={lastNameChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                placeholder="Email"
                defaultValue={user.email}
                onChange={emailChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                placeholder="Password"
                defaultValue={user.password}
                onChange={passwordChange}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={signUpClickEvent}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
      </Box>
    </Container>
  );
}