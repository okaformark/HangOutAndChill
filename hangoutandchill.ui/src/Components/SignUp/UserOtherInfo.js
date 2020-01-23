import React, { Component } from 'react'
import { Dialog, AppBar, TextField, Button} from '@material-ui/core';
import { ThemeProvider as MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Countries from './Countries';

const theme = createMuiTheme();
class UserOtherInfo extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
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
                        <AppBar title="We need more information"/>
                        <TextField
                            placeholder="Enter your address"
                            label="Address"
                            onChange ={handleChange('address')}
                            defaultValue={inputs.address}
                            margin="normal"
                            fullWidth={true}
                        />
                        <br />
                        <TextField
                            placeholder="Apt or unit number"
                            label="Apt/Unit"
                            onChange ={handleChange('aptOrUnit')}
                            defaultValue={inputs.middleName}
                            margin="normal"
                            fullWidth={true}
                        />
                        <br />
                        <TextField
                            placeholder="Enter your state"
                            label="state"
                            onChange ={handleChange('state')}
                            defaultValue={inputs.state}
                            margin="normal"
                            fullWidth={true}
                        />
                        <br />
                        <TextField
                            placeholder="Enter Zipcode"
                            label="Zipcode"
                            onChange ={handleChange('zipCode')}
                            defaultValue={inputs.zipCode}
                            margin="normal"
                            fullWidth={true}
                        />
                        <br />
                        <Countries />
                        <br />
                        <Button
                            className="col"
                            color="secondary"
                            variant="contained"
                            onClick={this.back}
                            >Previous</Button>
                        <Button
                            className="col"
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

export default UserOtherInfo;