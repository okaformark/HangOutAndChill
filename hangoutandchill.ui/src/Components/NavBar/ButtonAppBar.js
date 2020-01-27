import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Register from '../SignUp/Register';

let stateObj= {
  loadComponent: false,
}
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

const handleOnClick = () => {
  stateObj.loadComponent = !(stateObj.loadComponent);
  console.log(stateObj.loadComponent)
}

const ButtonAppBar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Hangout and Chill
          </Typography>
          <Button 
            color="inherit"
            onClick = {handleOnClick}
            >Register</Button>
          <Button color="inherit">Login</Button>
        </Toolbar>
         {!stateObj.loadComponent ? null : <Register />}
      </AppBar>
    </div>
  );
}
export default ButtonAppBar;