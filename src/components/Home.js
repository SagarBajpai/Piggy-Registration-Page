import React from 'react';
import axios from 'axios';
import moment from 'moment';
import { ToastContainer, toast } from 'react-toastify';

import Stepper from 'react-stepper-horizontal';

import Navbar from './Navbar';
import PersonalInfoForm from './Forms/PersonalInfoForm';
import ProfessionalInfoForm from './Forms/ProfessionalInfoForm';
import AddressDetailsForm from './Forms/AddressDetailsForm';
import NriInfoForm from './Forms/NriInfoForm';
import BankDetailsForm from './Forms/BankDetailsForm';
import NomineeDetailsForm from './Forms/NomineeDetailsForm';
import ReviewSection from './ReviewSection';

import '../../public/css/bootstrap.min.css';
import '../../public/css/styles.css';
import '../css/home.css';
import 'react-toastify/dist/ReactToastify.css';

import data from '../data/pincode.json';

const PINCODE_URL = "http://www.postalpincode.in/api/pincode/";
const IFSC_URL = "https://ifsc.razorpay.com/";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            steps: [{
                title: "Personal Information",
                href: "http://www.google.com",
                onClick: (e) => {
                    e.preventDefault(e);
                    console.log("Clicked 1");
                    this.setState({currentStep: 0});
                }
            },
            {
                title: "Professional Information",
                href: "http://www.google.com",
                onClick: (e) => {
                    e.preventDefault(e);
                    console.log("Clicked 2");
                    this.setState({currentStep: 1});
                }
            },
            {
                title: "Address Details",
                href: "http://www.google.com",
                onClick: (e) => {
                    e.preventDefault(e);
                    console.log("Clicked 3");
                    this.setState({currentStep: 2});
                }
            },
            {
                title: "NRI Information",
                href: "http://www.google.com",
                onClick: (e) => {
                    e.preventDefault(e);
                    console.log("Clicked 4");
                    this.setState({currentStep: 3});
                }
            },
            {
                title: "Bank Details",
                href: "http://www.google.com",
                onClick: (e) => {
                    e.preventDefault(e);
                    console.log("Clicked 5");
                    this.setState({currentStep: 4});
                }
            },
            {
                title: "Nominee Details",
                href: "http://www.google.com",
                onClick: (e) => {
                    e.preventDefault(e);
                    console.log("Clicked 6");
                    this.setState({currentStep: 5});
                }
            },
            {
                title: "Review and Submit",
                href: "http://www.google.com",
                onClick: (e) => {
                    e.preventDefault(e);
                    console.log("Clicked 7");
                    this.setState({currentStep: 6});
                }
            }],
            currentStep: 0,
            disabledSteps: [3],

            firstName: "",
            lastName: "",
            dob: "",
            fatherName: "",
            panNumber: "",

            occupation: "Student",
            sourceOfWealth: "",
            annualIncome: "< 1,00,000",
            citizenship: "",
            residenceCountry: "",

            area: "",
            street: "",
            pincode: "",
            city: "",
            state: "",
            country: "",

            nriArea: "",
            nriStreet: "",
            nriPincode: "",
            nriCity: "",
            nriState: "",
            nriCountry: "",

            accountNumber: "",
            ifscCode: "",
            bankName: "",
            bankBranch: "",

            nomineeFirstName: "",
            nomineeLastName: "",
            nomineeDob: "",
            nomineeArea: "",
            nomineeStreet: "",
            nomineePincode: "",
            nomineeCity: "",
            nomineeState: "",
            nomineeCountry: "",

            personalInfoFormError: "",
            professionalInfoFormError: "",
            addressDetailsFormError: "",
            nriInfoFormError: "",
            bankDetailsFormError: "",
            nomineeDetailsFormError: ""
        };
    }

    formPreventDefault(e) {
        e.preventDefault();
    }

    handleChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState({
            [name]: value
        });

        if(name === "pincode" || name === "nriPincode" || name === "nomineePincode") {
            if(value.length === 6) {
                if(name === "pincode")
                    this.getPincode("", value);
                else if(name === "nriPincode")
                    this.getPincode("nri", value);
                else if(name === "nomineePincode")
                    this.getPincode("nominee", value);
            }
        }

        if(name === "ifscCode") {
            if(value.length === 11 && this.testIfscCodeRegex(value)) {
                this.getIfscCodeInfo(value);
            }
        }
    }

    handleCitizenshipAutosuggestChange = (event, { newValue }) => {
        this.setState({
            citizenship: newValue
        });
    };
    handleResidenceCountryAutosuggestChange = (event, { newValue }) => {
        this.setState({
            residenceCountry: newValue
        });
    };

    handleDobDateChange(date) {
        this.setState({
            dob: date
        });
    }

    handleNomineeDobDateChange(date) {
        this.setState({
            nomineeDob: date
        });
    }

    notify(message) {
        toast.info(message,{
            position: toast.POSITION.BOTTOM_RIGHT,
            autoClose: 2500
        });
    }

    getPincode(formName, pincode) {
        if(pincode in data) {
            if(formName == "") {
                this.setFormField("city", data[pincode].city);
                this.setFormField("state", data[pincode].state);
                this.setFormField("country", data[pincode].country);
                this.setFormError("addressDetailsFormError", "");
            }
            else if(formName == "nri") {
                this.setFormField("nriCity", data[pincode].city);
                this.setFormField("nriState", data[pincode].state);
                this.setFormField("nriCountry", data[pincode].country);
                this.setFormError("nriInfoFormError", "");
            }
            else if(formName == "nominee") {
                this.setFormField("nomineeCity", data[pincode].city);
                this.setFormField("nomineeState", data[pincode].state);
                this.setFormField("nomineeCountry", data[pincode].country);
                this.setFormError("nomineeDetailsFormError", "");
            }
        }
        else {
            if(formName == "") {
                this.setFormField("city", "");
                this.setFormField("state", "");
                this.setFormField("country", "");
                this.setFormError("addressDetailsFormError", "No information found");
            }
            else if(formName == "nri") {
                this.setFormField("nriCity", "");
                this.setFormField("nriState", "");
                this.setFormField("nriCountry", "");
                this.setFormError("nriInfoFormError", "No information found");
            }
            else if(formName == "nominee") {
                this.setFormField("nomineeCity", "");
                this.setFormField("nomineeState", "");
                this.setFormField("nomineeCountry", "");
                this.setFormError("nomineeDetailsFormError", "No information found");
            }
        }
    }

    getIfscCodeInfo(IFSC) {
        axios.get(IFSC_URL + IFSC)
        .then(res => {
            this.setFormField("bankName", res.data.BANK);
            this.setFormField("bankBranch", res.data.BRANCH);
        })
        .catch(err => {
            this.setFormField("bankName", "");
            this.setFormField("bankBranch", "");
            this.setFormError("bankDetailsFormError", "Invalid IFSC Code");
        });
    }

    handleFormSubmit(formName) {
        if(formName === "personalInfoForm") {
            if(this.validatePersonalInfoForm(this.state.firstName, this.state.lastName, this.state.dob, this.state.fatherName, this.state.panNumber)){
                this.setState({
                    currentStep: this.state.currentStep + 1
                });
            }
        }
        if(formName === "professionalInfoForm") {
            if(this.validateProfessionalInfoForm(this.state.occupation, this.state.sourceOfWealth, this.state.annualIncome, this.state.citizenship, this.state.residenceCountry)){
                if(this.state.citizenship.toUpperCase() !== "INDIAN") {
                    this.setState({
                        disabledSteps: []
                    });
                }
                else {
                    this.setState({
                        disabledSteps: [3]
                    });
                }
                this.setState({
                    currentStep: this.state.currentStep + 1
                });
            }
        }
        if(formName === "addressDetailsForm") {
            if(this.validateAddressDetailsForm(this.state.area, this.state.street, this.state.pincode, this.state.city, this.state.state, this.state.country)){
                if(this.state.citizenship.toUpperCase() === "INDIAN") {
                    this.setState({
                        currentStep: this.state.currentStep + 2
                    });
                }
                else {
                    this.setState({
                        currentStep: this.state.currentStep + 1
                    });
                }
            }
        }
        if(formName === "nriInfoForm") {
            if(this.validateNriInfoForm(this.state.nriArea, this.state.nriStreet, this.state.nriPincode, this.state.nriCity, this.state.nriState, this.state.nriCountry)){
                this.setState({
                    currentStep: this.state.currentStep + 1
                });
            }
        }
        if(formName === "bankDetailsForm") {
            if(this.validateBankDetailsForm(this.state.accountNumber, this.state.ifscCode, this.state.bankName, this.state.bankBranch)){
                this.setState({
                    currentStep: this.state.currentStep + 1
                });
            }
        }
        if(formName === "nomineeDetailsForm") {
            if(this.validateNomineeDetailsForm(this.state.nomineeFirstName, this.state.nomineeLastName, this.state.nomineeDob, this.state.nomineeArea, this.state.nomineeStreet, this.state.nomineePincode, this.state.nomineeCity, this.state.nomineeCountry)){
                this.setState({
                    currentStep: this.state.currentStep + 1
                });
            }
        }
    }

    handleRegistration() {
        this.notify("Registration Successful");
    }

    setFormField(formField, value) {
        this.setState({
            [formField]: value
        });
    }

    setFormError(formName, formError) {
        this.setState({
            [formName]: formError
        });
    }

    clearFormError(formName) {
        this.setState({
            [formName]: ""
        });
    }
    
    testIfscCodeRegex(ifscCode) {
        if(!(/^([a-zA-Z]){4}([0]){1}([a-zA-Z0-9]){6}?$/.test(ifscCode))) {
            this.setFormError("bankDetailsFormError", "IFSC Code is invalid");
            return false;
        }
        else {
            this.clearFormError("bankDetailsFormError");
            return true;
        }
    }

    validatePersonalInfoForm(firstName, lastName, dob, fatherName, panNumber) {
        if(firstName === ""){
            this.setFormError("personalInfoFormError", "First name cannot be empty");
            return false;
        }
        if(lastName === ""){
            this.setFormError("personalInfoFormError", "Last name cannot be empty");
            return false;
        }
        if(dob === ""){
            this.setFormError("personalInfoFormError", "Date of birth cannot be empty");
            return false;
        }
        if(!moment(dob).isValid()){
            this.setFormError("personalInfoFormError", "Date of Birth is invalid");
            return false;
        }
        if(moment(dob) > moment()){
            this.setFormError("personalInfoFormError", "Date of Birth cannot be more than today");
            return false;
        }
        if(fatherName === ""){
            this.setFormError("personalInfoFormError", "Father's name cannot be empty");
            return false;
        }
        if(panNumber === ""){
            this.setFormError("personalInfoFormError", "PAN Number cannot be empty");
            return false;
        }
        if(!(/^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/.test(panNumber))) {
            this.setFormError("personalInfoFormError", "PAN Number is incorrect");
            return false;
        }
        this.clearFormError("personalInfoFormError");
        return true;
    }

    validateProfessionalInfoForm(occupation, sourceOfWealth, annualIncome, citizenship, residenceCountry) {
        if(occupation === ""){
            this.setFormError("professionalInfoFormError", "Occupation cannot be empty");
            return false;
        }
        if(sourceOfWealth === ""){
            this.setFormError("professionalInfoFormError", "Source of Wealth cannot be empty");
            return false;
        }
        if(annualIncome === ""){
            this.setFormError("professionalInfoFormError", "Annual Income cannot be empty");
            return false;
        }
        if(citizenship === ""){
            this.setFormError("professionalInfoFormError", "Citizenship cannot be empty");
            return false;
        }
        if(residenceCountry === ""){
            this.setFormError("professionalInfoFormError", "Residence Country cannot be empty");
            return false;
        }
        this.clearFormError("professionalInfoFormError");
        return true;
    }

    validateAddressDetailsForm(area, street, pincode, city, state, country) {
        if(area === ""){
            this.setFormError("addressDetailsFormError", "Area cannot be empty");
            return false;
        }
        if(street === ""){
            this.setFormError("addressDetailsFormError", "Street cannot be empty");
            return false;
        }
        if(pincode === ""){
            this.setFormError("addressDetailsFormError", "Pincode cannot be empty");
            return false;
        }
        if(pincode.length !== 6) {
            this.setFormError("addressDetailsFormError", "Pincode is incorrect");
            return false;
        }
        if(city === ""){
            this.setFormError("addressDetailsFormError", "City cannot be empty");
            return false;
        }
        if(state === ""){
            this.setFormError("addressDetailsFormError", "State cannot be empty");
            return false;
        }
        if(country === ""){
            this.setFormError("addressDetailsFormError", "Country cannot be empty");
            return false;
        }
        this.clearFormError("addressDetailsFormError");
        return true;
    }

    validateNriInfoForm(area, street, pincode, city, state, country) {
        if(area === ""){
            this.setFormError("nriInfoFormError", "Area cannot be empty");
            return false;
        }
        if(street === ""){
            this.setFormError("nriInfoFormError", "Street cannot be empty");
            return false;
        }
        if(pincode === ""){
            this.setFormError("nriInfoFormError", "Pincode cannot be empty");
            return false;
        }
        if(pincode.length !== 6) {
            this.setFormError("nriInfoFormError", "Pincode is incorrect");
            return false;
        }
        if(city === ""){
            this.setFormError("nriInfoFormError", "City cannot be empty");
            return false;
        }
        if(state === ""){
            this.setFormError("nriInfoFormError", "State cannot be empty");
            return false;
        }
        if(country === ""){
            this.setFormError("nriInfoFormError", "Country cannot be empty");
            return false;
        }
        this.clearFormError("nriInfoFormError");
        return true;
    }

    validateBankDetailsForm(accountNumber, ifscCode, bankName, bankBranch) {
        if(accountNumber === ""){
            this.setFormError("bankDetailsFormError", "Account number cannot be empty");
            return false;
        }
        if(ifscCode === ""){
            this.setFormError("bankDetailsFormError", "IFSC code cannot be empty");
            return false;
        }
        this.testIfscCodeRegex(ifscCode);
        if(bankName === ""){
            this.setFormError("bankDetailsFormError", "Bank name cannot be empty");
            return false;
        }
        if(bankBranch === ""){
            this.setFormError("bankDetailsFormError", "Bank branch cannot be empty");
            return false;
        }
        this.clearFormError("bankDetailsFormError");
        return true;
    }

    validateNomineeDetailsForm(firstName, lastName, dob, area, street, pincode, city, state, country) {
        if(firstName === ""){
            this.setFormError("nomineeDetailsFormError", "First name cannot be empty");
            return false;
        }
        if(lastName === ""){
            this.setFormError("nomineeDetailsFormError", "Last name cannot be empty");
            return false;
        }
        if(dob === ""){
            this.setFormError("nomineeDetailsFormError", "Date of birth cannot be empty");
            return false;
        }
        if(!moment(dob).isValid()){
            this.setFormError("nomineeDetailsFormError", "Date of Birth is invalid");
            return false;
        }
        if(moment(dob) > moment()){
            this.setFormError("nomineeDetailsFormError", "Date of Birth cannot be more than today");
            return false;
        }
        if(area === ""){
            this.setFormError("nomineeDetailsFormError", "Area cannot be empty");
            return false;
        }
        if(street === ""){
            this.setFormError("nomineeDetailsFormError", "Street cannot be empty");
            return false;
        }
        if(pincode === ""){
            this.setFormError("nomineeDetailsFormError", "Pincode cannot be empty");
            return false;
        }
        if(pincode.length !== 6) {
            this.setFormError("nomineeDetailsFormError", "Pincode is incorrect");
            return false;
        }
        if(city === ""){
            this.setFormError("nomineeDetailsFormError", "City cannot be empty");
            return false;
        }
        if(state === ""){
            this.setFormError("nomineeDetailsFormError", "State cannot be empty");
            return false;
        }
        if(country === ""){
            this.setFormError("nomineeDetailsFormError", "Country cannot be empty");
            return false;
        }
        this.clearFormError("nomineeDetailsFormError");
        return true;
    }

    render() {
        const currentStep = this.state.currentStep;
        return(
            <div>
                <Navbar />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <Stepper steps={ this.state.steps } activeStep={ currentStep } disabledSteps={ this.state.disabledSteps } />
                            {currentStep === 0 &&
                                <PersonalInfoForm
                                    formPreventDefault={(e) => this.formPreventDefault(e)}
                                    firstName={this.state.firstName}
                                    lastName={this.state.lastName}
                                    dob={this.state.dob}
                                    fatherName={this.state.fatherName}
                                    panNumber={this.state.panNumber}
                                    error={this.state.personalInfoFormError}
                                    onChange={(e) => this.handleChange(e)}
                                    onDateChange={(date) => this.handleDobDateChange(date)}
                                    onClick={(formName) => this.handleFormSubmit(formName)}
                                />
                            }
                            {currentStep === 1 &&
                                <ProfessionalInfoForm
                                    formPreventDefault={(e) => this.formPreventDefault(e)}
                                    occupation={this.state.occupation}
                                    sourceOfWealth={this.state.sourceOfWealth}
                                    annualIncome={this.state.annualIncome}
                                    citizenship={this.state.citizenship}
                                    residenceCountry={this.state.residenceCountry}
                                    error={this.state.professionalInfoFormError}
                                    onCitizenshipAutosuggestChange={(e, value) => this.handleCitizenshipAutosuggestChange(e, value)}
                                    onResidenceCountryAutosuggestChange={(e, value) => this.handleResidenceCountryAutosuggestChange(e, value)}
                                    onChange={(e) => this.handleChange(e)}
                                    onClick={(formName) => this.handleFormSubmit(formName)}
                                />
                            }
                            {currentStep === 2 &&
                                <AddressDetailsForm
                                    formPreventDefault={(e) => this.formPreventDefault(e)}
                                    area={this.state.area}
                                    street={this.state.street}
                                    pincode={this.state.pincode}
                                    city={this.state.city}
                                    state={this.state.state}
                                    country={this.state.country}
                                    error={this.state.addressDetailsFormError}
                                    onChange={(e) => this.handleChange(e)}
                                    onClick={(formName) => this.handleFormSubmit(formName)}
                                />
                            }
                            {currentStep === 3 &&
                                <NriInfoForm
                                    formPreventDefault={(e) => this.formPreventDefault(e)}
                                    area={this.state.nriArea}
                                    street={this.state.nriStreet}
                                    pincode={this.state.nriPincode}
                                    city={this.state.nriCity}
                                    state={this.state.nriState}
                                    country={this.state.nriCountry}
                                    error={this.state.nriInfoFormError}
                                    onChange={(e) => this.handleChange(e)}
                                    onClick={(formName) => this.handleFormSubmit(formName)}
                                />
                            }
                            {currentStep === 4 &&
                                <BankDetailsForm
                                    formPreventDefault={(e) => this.formPreventDefault(e)}
                                    accountNumber={this.state.accountNumber}
                                    ifscCode={this.state.ifscCode}
                                    bankName={this.state.bankName}
                                    bankBranch={this.state.bankBranch}
                                    error={this.state.bankDetailsFormError}
                                    onChange={(e) => this.handleChange(e)}
                                    onClick={(formName) => this.handleFormSubmit(formName)}
                                />
                            }
                            {currentStep === 5 &&
                                <NomineeDetailsForm
                                    formPreventDefault={(e) => this.formPreventDefault(e)}
                                    firstName={this.state.nomineeFirstName}
                                    lastName={this.state.nomineeLastName}
                                    nomineeDob={this.state.nomineeDob}
                                    area={this.state.nomineeArea}
                                    street={this.state.nomineeStreet}
                                    pincode={this.state.nomineePincode}
                                    city={this.state.nomineeCity}
                                    state={this.state.nomineeState}
                                    country={this.state.nomineeCountry}
                                    error={this.state.nomineeDetailsFormError}
                                    onChange={(e) => this.handleChange(e)}
                                    onDateChange={(date) => this.handleNomineeDobDateChange(date)}
                                    onClick={(formName) => this.handleFormSubmit(formName)}
                                />
                            }
                            {currentStep === 6 &&
                                <ReviewSection
                                    firstName={this.state.firstName}
                                    lastName={this.state.lastName}
                                    dob={this.state.dob.format('L')}
                                    fatherName={this.state.fatherName}
                                    panNumber={this.state.panNumber}
                                    occupation={this.state.occupation}
                                    sourceOfWealth={this.state.sourceOfWealth}
                                    annualIncome={this.state.annualIncome}
                                    citizenship={this.state.citizenship}
                                    residenceCountry={this.state.residenceCountry}
                                    area={this.state.area}
                                    street={this.state.street}
                                    pincode={this.state.pincode}
                                    city={this.state.city}
                                    state={this.state.state}
                                    country={this.state.country}
                                    nriArea={this.state.nriArea}
                                    nriStreet={this.state.nriStreet}
                                    nriPincode={this.state.nriPincode}
                                    nriCity={this.state.nriCity}
                                    nriState={this.state.nriState}
                                    nriCountry={this.state.nriCountry}
                                    accountNumber={this.state.accountNumber}
                                    ifscCode={this.state.ifscCode}
                                    bankName={this.state.bankName}
                                    bankBranch={this.state.bankBranch}
                                    nomineeFirstName={this.state.nomineeFirstName}
                                    nomineeLastName={this.state.nomineeLastName}
                                    nomineeDob={this.state.nomineeDob.format('L')}
                                    nomineeArea={this.state.nomineeArea}
                                    nomineeStreet={this.state.nomineeStreet}
                                    nomineePincode={this.state.nomineePincode}
                                    nomineeCity={this.state.nomineeCity}
                                    nomineeState={this.state.nomineeState}
                                    nomineeCountry={this.state.nomineeCountry}
                                    onClick={() => this.handleRegistration()}
                                />
                            }
                        </div>
                    </div>
                    <ToastContainer />
                </div>
            </div>
        );
    }
}

export default Home;