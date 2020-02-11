// import React, { Component } from 'react';
// import Dialog from '@material-ui/core/Dialog';
// import AppBar from '@material-ui/core/AppBar';
// import { ThemeProvider as MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
// import { List, ListItem, ListItemText } from '@material-ui/core/';
// import Button from '@material-ui/core/Button';
// import Auth from '../Auth/Auth'


// const theme = createMuiTheme();
// export class Confirm extends Component {
//   continue = e => {
//     e.preventDefault();
//     // PROCESS FORM //
//     this.props.nextStep();
//     Auth.registerUser(this.props.inputs)
//       .then((response) =>{
//         console.log(response,"yay")
//       })
//   };

//   back = e => {
//     e.preventDefault();
//     this.props.prevStep();
//   };

//   render() {
    // const {inputs:{ 
    //     firstName, 
    //     middleName, 
    //     lastName, 
    //     userName, 
    //     bio,
    //     email,
    //     dateOfBirth,
    //     address,
    //     aptOrUnit,
    //     state,
    //     city,
    //     zipCode,
    //     country
    // }} = this.props;
//     return (
//       <MuiThemeProvider theme={theme}>
//         <React.Fragment>
//           <Dialog
//             open={true}
//             fullWidth={true}
//             maxWidth="sm"
//           >
          // <AppBar title="Confirm User Data" />
          // <List>
          //   <ListItem>
          //     <ListItemText primary="First Name" secondary={firstName} /> 
          //   </ListItem>
          //   <ListItem>
          //     <ListItemText primary="Middle Name" secondary={middleName} /> 
          //   </ListItem>
          //   <ListItem>
          //     <ListItemText primary="Last Name" secondary={lastName} /> 
          //   </ListItem>
          //   <ListItem>
          //     <ListItemText primary="User Name" secondary={userName} /> 
          //   </ListItem>
          //   <ListItem>
          //     <ListItemText primary="Bio" secondary={bio} /> 
          //   </ListItem>
          //   <ListItem>
          //     <ListItemText primary="Email" secondary={email} /> 
          //   </ListItem>
          //   <ListItem>
          //     <ListItemText primary="Date of Birth" secondary={dateOfBirth} /> 
          //   </ListItem>
          //   <ListItem>
          //     <ListItemText primary="Address" secondary={address} /> 
          //   </ListItem>
          //   <ListItem>
          //     <ListItemText primary="Apt or Unit" secondary={aptOrUnit} /> 
          //   </ListItem>
          //   <ListItem>
          //     <ListItemText primary="City" secondary={city} /> 
          //   </ListItem>
          //   <ListItem>
          //     <ListItemText primary="State " secondary={state} /> 
          //   </ListItem>
          //   <ListItem>
          //     <ListItemText primary="ZipCode" secondary={zipCode} /> 
          //   </ListItem>
          //   <ListItem>
          //     <ListItemText primary="Country" secondary={country} /> 
          //   </ListItem>
          // </List>
          // <br />
        
          // <Button
          //   color="secondary"
          //   variant="contained"
          //   onClick={this.back}
          // >Back</Button>

          // <Button
          //   color="primary"
          //   variant="contained"
          //   onClick={this.continue}
          // >Confirm & Continue</Button>
//           </Dialog>
//         </React.Fragment>
//       </MuiThemeProvider>
//     );
//   }
// }

// export default Confirm;
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { FixedSizeList } from 'react-window';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
import './ConfirmInfo.scss';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: 400,
    maxWidth: 300,
    backgroundColor: theme.palette.background.paper,
  },
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

// const ConfirmVirtualizedList = (props) => {
// //   const {inputs:{ 
// //     firstName, 
// //     middleName, 
// //     lastName, 
// //     userName, 
// //     bio,
// //     email,
// //     dateOfBirth,
// //     address,
// //     aptOrUnit,
// //     state,
// //     city,
// //     zipCode,
// //     country
// // }} = this.props;

//   return (
//     <>
//     <Container component="main" maxWidth="lg">
//       <CssBaseline />
        
//     </Container>
//        {/* <Box mt={8}></Box> */}
//       </>
//   );
// }

// confirmInfo.propTypes = {
//   index: PropTypes.number.isRequired,
//   style: PropTypes.object.isRequired,
// };

export default function ConfirmIfo(props) {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="lg">
      <CssBaseline />
      <div className={classes.root}>
        {/* <FixedSizeList height={1000} width={1000} itemSize={50} itemCount={1}> */}
        <AppBar title="Confirm User Data"  justifycontent="center" />
        <List>
          {/* <ListItem>
            <ListItemText primary="First Name" secondary={props.firstName} /> 
          </ListItem>
          <ListItem>
            <ListItemText primary="Middle Name" secondary={props.middleName} /> 
          </ListItem>
          <ListItem>
            <ListItemText primary="Last Name" secondary={lastName} /> 
          </ListItem>
          <ListItem>
            <ListItemText primary="User Name" secondary={userName} /> 
          </ListItem>
          <ListItem>
            <ListItemText primary="Bio" secondary={bio} />  */}
          {/* </ListItem> */}
          {/* <ListItem>
            <ListItemText primary="Email" secondary={props.email} /> 
          </ListItem> */}
          {/* <ListItem>
            <ListItemText primary="Date of Birth" secondary={dateOfBirth} /> 
          </ListItem> */}
          <ListItem>
            <ListItemText primary="Address" secondary={props.inputs.address} /> 
          </ListItem>
          <ListItem>
            <ListItemText primary="Apt or Unit" secondary={props.aptOrUnit} /> 
          </ListItem>
          <ListItem>
            <ListItemText primary="City" secondary={props.city} /> 
          </ListItem>
          <ListItem>
            <ListItemText primary="State " secondary={props.state} /> 
          </ListItem>
          <ListItem>
            <ListItemText primary="ZipCode" secondary={props.zipCode} /> 
          </ListItem>
          <ListItem>
            <ListItemText primary="Country" secondary={props.country} /> 
          </ListItem>
      </List>
      <Button
        color="secondary"
        variant="contained"
        onClick={props.prevStep}
      >Back</Button>

        <Button
          color="primary"
          variant="contained"
          onClick={props.proceed}
        >Confirm & Continue</Button>
        {/* </FixedSizeList> */}
      </div>
    </Container>
  );
}
