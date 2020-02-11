import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Register from '../SignUp/Register';
import SignUp from '../SignUp/SignUp';
import SignIn from '../SignUp/SignIn';
import { NavLink as RRNavLink } from 'react-router-dom';



const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const ButtonAppBar = () => {
  const [isRegister, setRegister] = useState(false);

  const [isSignIn, setSignIn] = useState(false);

  const classes = useStyles();

   const handleSignUpOnClick = () => {
    setRegister(true);
    setSignIn(false);
  }

  const handleSignInOnClick = () => {
    setSignIn(true);
    setRegister(false);
  }
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Friendular
          </Typography>
            <Button 
              tag={RRNavLink}
              to='/buttonAppBar/signUp'
              color="inherit"
              onClick={handleSignUpOnClick}
              >Sign Up
            </Button>
          <Button color="inherit" onClick={handleSignInOnClick} to='/buttonAppBar/signIn' tag={RRNavLink}>Sign In</Button>
        </Toolbar>
      </AppBar>
      {isRegister ? <SignUp /> : null}
      {isSignIn ? <SignIn /> : null}
    </div>
  );
}
export default ButtonAppBar;
