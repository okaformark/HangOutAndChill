import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { List, ListItem, ListItemText } from '@material-ui/core/';
import Button from '@material-ui/core/Button';
import Auth from '../Auth/Auth'


const theme = createMuiTheme();
export class Confirm extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
    Auth.registerUser(this.props.inputs)
      .then((response) =>{
        console.log(response,"yay")
      })
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {inputs:{ 
        firstName, 
        middleName, 
        lastName, 
        userName, 
        bio,
        email,
        dateOfBirth,
        address,
        aptOrUnit,
        state,
        city,
        zipCode,
        country
    }} = this.props;
    return (
      <MuiThemeProvider theme={theme}>
        <React.Fragment>
          <Dialog
            open={true}
            fullWidth={true}
            maxWidth="sm"
          >
          <AppBar title="Confirm User Data" />
          <List>
            <ListItem>
              <ListItemText primary="First Name" secondary={firstName} /> 
            </ListItem>
            <ListItem>
              <ListItemText primary="Middle Name" secondary={middleName} /> 
            </ListItem>
            <ListItem>
              <ListItemText primary="Last Name" secondary={lastName} /> 
            </ListItem>
            <ListItem>
              <ListItemText primary="User Name" secondary={userName} /> 
            </ListItem>
            <ListItem>
              <ListItemText primary="Bio" secondary={bio} /> 
            </ListItem>
            <ListItem>
              <ListItemText primary="Email" secondary={email} /> 
            </ListItem>
            <ListItem>
              <ListItemText primary="Date of Birth" secondary={dateOfBirth} /> 
            </ListItem>
            <ListItem>
              <ListItemText primary="Address" secondary={address} /> 
            </ListItem>
            <ListItem>
              <ListItemText primary="Apt or Unit" secondary={aptOrUnit} /> 
            </ListItem>
            <ListItem>
              <ListItemText primary="City" secondary={city} /> 
            </ListItem>
            <ListItem>
              <ListItemText primary="State " secondary={state} /> 
            </ListItem>
            <ListItem>
              <ListItemText primary="ZipCode" secondary={zipCode} /> 
            </ListItem>
            <ListItem>
              <ListItemText primary="Country" secondary={country} /> 
            </ListItem>
          </List>
          <br />
        
          <Button
            color="secondary"
            variant="contained"
            onClick={this.back}
          >Back</Button>

          <Button
            color="primary"
            variant="contained"
            onClick={this.continue}
          >Confirm & Continue</Button>
          </Dialog>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default Confirm;