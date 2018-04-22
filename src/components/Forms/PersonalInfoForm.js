import React from 'react';

import FormInputField from './Utils/FormInputField';
import FormDateField from './Utils/FormDateField';
import FormButton from './Utils/FormButton';
import FormError from './Utils/FormError';

const PersonalInfoForm = (props) => {
    return(
        <div className="col-12 col-sm-7 col-md-6 col-lg-5 col-xl-4 mx-auto form-container custom-card">
            <form onSubmit={(e) => props.formPreventDefault(e)}>
                <div className="form-row">
                    <FormError
                        error={props.error}
                    />
                </div>
                <div className="form-row">
                    <FormInputField
                        containerClasses="col-12 col-sm-6"
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={props.firstName}
                        label="First Name"
                        onChange={(e) => props.onChange(e)}
                    />
                    <FormInputField
                        containerClasses="col-12 col-sm-6"
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={props.lastName}
                        label="Last Name"
                        onChange={(e) => props.onChange(e)}
                    />
                </div>
                <div className="form-row">
                    <FormDateField
                        containerClasses="col-12 col-sm-6"
                        name="dob"
                        placeholder="Date of Birth"
                        value={props.dob}
                        label="Date of Birth"
                        onDateChange={(date) => props.onDateChange(date)}
                    />
                    <FormInputField
                        containerClasses="col-12 col-sm-6"
                        type="text"
                        name="fatherName"
                        placeholder="Father's Name"
                        value={props.fatherName}
                        label="Father's Name"
                        onChange={(e) => props.onChange(e)}
                    />
                </div>
                <div className="form-row">
                    <FormInputField
                        containerClasses="col-12"
                        type="text"
                        name="panNumber"
                        placeholder="AAAAA0000A"
                        value={props.panNumber}
                        label="PAN Number"
                        onChange={(e) => props.onChange(e)}
                    />
                </div>
                <div className="form-row">
                    <FormButton
                        containerClasses="col-12"
                        onClick={() => props.onClick("personalInfoForm")}
                        value="Save"
                    />
                </div>
            </form>
        </div>
    );
}

module.exports = PersonalInfoForm;