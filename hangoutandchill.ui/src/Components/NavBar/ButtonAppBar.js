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
// {isRegister ?
//   <Register />
//   : null
//   }
const ButtonAppBar = () => {
  const [isRegister, setRegister] = useState(false);
  const classes = useStyles();
   const handleOnClick = () => {
    setRegister(true);
    return <SignUp />
  }
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
          {/* <NavLink tag={RRNavLink} to='/SignUp'> */}
            <Button 
              tag={RRNavLink}
              to='/SignUp'
              color="inherit"
              onClick={handleOnClick}
              >SignUp
            </Button>
          {/* </NavLink> */}
            
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default ButtonAppBar;
