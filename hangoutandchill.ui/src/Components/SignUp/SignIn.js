import React, { useCallback, useContext } from 'react';
import { withRouter, Redirect} from 'react-router';
import firebase from 'firebase/app';
import 'firebase/auth';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import  {AuthContext}  from '../Auth/Auth';
import UserData from '../Helpers/UserData';

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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function SignIn({history}) {
  const classes = useStyles();
  const [signInUser, setSignInUser] = React.useState([
    {
      email: '',
      password: '', 
    }
  ])
  const signInClickEvent = useCallback(
    async e => {
      e.preventDefault();
      try {
        await firebase.default
          .auth()
          .signInWithEmailAndPassword(signInUser.email, signInUser.password).then((user) => {
            UserData.getUser(user.user.uid).then((userInfo) => {
              const userSignUpObject = {
                userId: userInfo.data.Id,
                firstName: userInfo.data.FirstName,
                lastName: userInfo.data.LastName,
            }
            sessionStorage.setItem("userInfo", JSON.stringify(userSignUpObject));
            }).catch((error) => {
              console.error(`Error getting user info on signin for user with email ${signInUser.email}: `, error);
            });
            // sessionStorage.setItem('userInfo', JSON.stringify(userSignUpObject));
          }).catch((error) => {
            console.error(`Could not sign in user with email ${signInUser.email}: `, error);
          });
        history.push("/home");
      } catch (error) {
        alert (error);
      }
    }, [history, signInUser.email,signInUser.password]
  )

  const emailChange = e => {
    const tempUser = { ...signInUser };
    tempUser.email = e.target.value;
    setSignInUser(tempUser);
};

const passwordChange = e => {
    const tempUser = { ...signInUser };
    tempUser.password = e.target.value;
    setSignInUser(tempUser);
};


  //const { currentUser } = useContext(AuthContext);
    if (firebase.auth().currentUser) {
      return <Redirect to="/home" />
    }
  return (
    // <>
    // <AppBar position="static">
    //   <Toolbar>
    //     <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
    //       <MenuIcon />
    //     </IconButton>
    //     <Typography variant="h6" className={classes.title}>
    //       News
    //     </Typography>
    //   </Toolbar>
    // </AppBar>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={emailChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange= {passwordChange}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={signInClickEvent}
            to='/home'
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/buttonAppBar/signUp" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
      </Box>
    </Container>
    // </>
  );
}

export default withRouter(SignIn)