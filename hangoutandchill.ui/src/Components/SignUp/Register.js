import React, { Component } from 'react';
import UserOtherInfo from './UserOtherInfo';
import UserPersonalInfo from './UserPersonalInfo';
import ConfirmInfo from './ConfirmInfo';
import Success from './Success';

class Register extends Component {
    state = {
        step: 1,
        firstName: '',
        middleName: '',
        lastName: '',
        userName: '',
        bio: '',
        email: '',
        dateOfBirth: '',
        address: '',
        aptOrUnit: '',
        city: '',
        state: '',
        zipCode: '',
        country: ''
    };

    // proceed to next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({ step: step + 1 });
    }

    prevStep = () => {
        const { step } = this.state;
        this.setState({ step: step - 1});
    }

    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
    }

    render() {
        const { 
            step, 
            firstName, 
            middleName, 
            lastName, 
            userName, 
            bio,
            email,
            dateOfBirth,
            address,
            aptOrUnit,
            city,
            state,
            zipCode,
            country
        } = this.state;

        const inputs = {
            step, 
            firstName, 
            middleName, 
            lastName, 
            userName, 
            bio,
            email,
            dateOfBirth,
            address,
            aptOrUnit,
            city,
            state,
            zipCode,
            country
        };

        switch(step){
            case 1:
                return (
                    <UserPersonalInfo
                        nextStep = {this.nextStep}
                        handleChange = {this.handleChange}
                        inputs = {inputs}
                    />
                )
            case 2:
                return (
                    <UserOtherInfo
                        nextStep = {this.nextStep}
                        prevStep = {this.prevStep}
                        handleChange = {this.handleChange}
                        inputs = {inputs}
                    />
                )
            case 3:
                return (
                    <ConfirmInfo
                        nextStep = {this.nextStep}
                        prevStep = {this.prevStep}
                        inputs = {inputs}
                    />
                )
            case 4:
                return (
                    <Success/>
                )

            default:
                return(
                    <div></div>
                )
        }
    }
}

export default Register;