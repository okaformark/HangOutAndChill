import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';


const theme = createMuiTheme();
export class Success extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    return (
      <MuiThemeProvider theme={theme} > 
        <React.Fragment>
        <Dialog 
            open={true}
            fullWidth={true}
            maxWidth='sm'
          >
            <AppBar title="Success" />
            <h1>Thank You For Your Registering</h1>
            <p>Log in to continue</p>
          </Dialog>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default Success;