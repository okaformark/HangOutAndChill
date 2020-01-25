import React, { Component } from 'react';
import { Dialog, AppBar, TextField, Button} from '@material-ui/core';
import { ThemeProvider as MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme();
class UserPersonalInfo extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };


    render() {
        const { inputs, handleChange } = this.props;
        return (
            <MuiThemeProvider theme={theme}>
                <React.Fragment>
                    <Dialog
                        open={true}
                        fullWidth={true}
                        maxWidth="sm"
                    >
                        <AppBar title="Enter User Details"/>
                        <TextField
                            placeholder="Enter your first name"
                            label="First Name"
                            onChange ={handleChange('firstName')}
                            defaultValue={inputs.firstName}
                            margin="normal"
                            fullWidth= {true}
                        />
                        <br />
                        <TextField
                            placeholder="Enter your middle name"
                            label="Middle Name"
                            onChange ={handleChange('middleName')}
                            defaultValue={inputs.middleName}
                            margin="normal"
                            fullWidth={true}
                        />
                        <br />
                        <TextField
                            placeholder="Enter your last name"
                            label="Last Name"
                            onChange ={handleChange('lastName')}
                            defaultValue={inputs.lastName}
                            margin="normal"
                            fullWidth={true}
                        />
                        <br />
                        <TextField
                            placeholder="Tell us about yourself"
                            label="Bio"
                            onChange ={handleChange('bio')}
                            defaultValue={inputs.bio}
                            margin="normal"
                            fullWidth={true}
                        />
                        <br />
                        <TextField
                            placeholder="Enter your email address"
                            label="Email"
                            onChange ={handleChange('email')}
                            defaultValue={inputs.email}
                            margin="normal"
                            fullWidth={true}
                        />
                        <br />
                        <TextField
                            id="date"
                            label="Birthday"
                            type="date"
                            defaultValue={inputs.dateOfBirth}
                            // className={classes.textField}
                            InputLabelProps={{
                            shrink: true,
                            }}
                        />
                        <Button
                            color="primary"
                            variant="contained"
                            onClick={this.continue}
                        >
                            Next
                        </Button>
                    </Dialog>
                </React.Fragment>    
            </MuiThemeProvider>
        )
    }
}

export default UserPersonalInfo;