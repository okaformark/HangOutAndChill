// import React, { Component } from 'react'
// import { AppBar, TextField, StylesProvider } from '@material-ui/core';
// import { ThemeProvider as MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
// import RaisedButton from '@material-ui/core/RaisedButton'
// import Countries from './Countries';
import React, {Component}from 'react';
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
import Countries from './Countries';

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

const  UserPersonalInfo = (props) => {
    const classes = useStyles();

    // const proceed = (e, props) => {
    //     e.preventDefault();
    //     props.nextStep();
    // };

    // const back = (e, props) => {
    //     e.preventDefault();
    //     props.prevStep();
    // };
return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          We need more Info
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="Address"
            label="Address"
            name="address"
            autoComplete="address"
            onChange ={props.handleChange('address')}
            defaultValue={props.inputs.address}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="aptOrUnit"
            label="AptOrUnit"
            id="aptOrUnit"
            autoComplete="aptOrUnit"
            onChange ={props.handleChange('aptOrUnit')}
            defaultValue={props.inputs.aptOrUnit}
          />
          {/* <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          /> */}
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="city"
            label="City"
            id="city"
            autoComplete="city"
            onChange ={props.handleChange('city')}
            defaultValue={props.inputs.city}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="state"
            label="State"
            id="state"
            autoComplete="state"
            onChange ={props.handleChange('state')}
            defaultValue={props.inputs.state}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="zipCode  "
            label="ZipCode"
            id="zipCode"
            autoComplete="zipCode"
            onChange ={props.handleChange('zipCode')}
            defaultValue={props.inputs.zipCode}
          />
          <Countries />
          {/* <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={back}
          >
            Previous
          </Button> */}

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={props.nextStep}
          >
            Next
          </Button>
          {/* <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid> */}
        </form>
      </div>
      <Box mt={8}>
      </Box>
    </Container>
        )
}

export default UserPersonalInfo;