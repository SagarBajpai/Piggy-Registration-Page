import React from 'react';

import FormInputField from './Utils/FormInputField';
import FormDateField from './Utils/FormDateField';
import FormButton from './Utils/FormButton';
import FormError from './Utils/FormError';

const NomineeDetailsForm = (props) => {
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
                        name="nomineeFirstName"
                        placeholder="First Name"
                        value={props.nomineeFirstName}
                        label="First Name"
                        onChange={(e) => props.onChange(e)}
                    />
                    <FormInputField
                        containerClasses="col-12 col-sm-6"
                        type="text"
                        name="nomineeLastName"
                        placeholder="Last Name"
                        value={props.nomineeLastName}
                        label="Last Name"
                        onChange={(e) => props.onChange(e)}
                    />
                </div>
                <div className="form-row">
                    <FormDateField
                        containerClasses="col-12"
                        name="nomineeDob"
                        placeholder="Date of Birth"
                        value={props.nomineeDob}
                        label="Date of Birth"
                        onDateChange={(date) => props.onDateChange(date)}
                    />
                </div>
                <div className="form-row">
                    <FormInputField
                        containerClasses="col-12"
                        type="text"
                        name="nomineeStreet"
                        placeholder="Street"
                        value={props.street}
                        label="Street"
                        onChange={(e) => props.onChange(e)}
                    />
                </div>
                <div className="form-row">
                    <FormInputField
                        containerClasses="col-12 col-sm-4"
                        type="text"
                        name="nomineeArea"
                        placeholder="Area"
                        value={props.area}
                        label="Area"
                        onChange={(e) => props.onChange(e)}
                    />
                    <FormInputField
                        containerClasses="col-12 col-sm-4"
                        type="text"
                        name="nomineePincode"
                        placeholder="Pincode"
                        value={props.pincode}
                        label="Pincode"
                        onChange={(e) => props.onChange(e)}
                    />
                    <FormInputField
                        containerClasses="col-12 col-sm-4"
                        type="text"
                        name="nomineeCity"
                        placeholder="City"
                        value={props.city}
                        label="City"
                        onChange={(e) => props.onChange(e)}
                    />
                </div>
                <div className="form-row">
                    <FormInputField
                        containerClasses="col-12 col-sm-6"
                        type="text"
                        name="nomineeState"
                        placeholder="State"
                        value={props.state}
                        label="State"
                        onChange={(e) => props.onChange(e)}
                    />
                    <FormInputField
                        containerClasses="col-12 col-sm-6"
                        type="text"
                        name="nomineeCountry"
                        placeholder="Country"
                        value={props.country}
                        label="Country"
                        onChange={(e) => props.onChange(e)}
                    />
                </div>
                <div className="form-row">
                    <FormButton
                        containerClasses="col-12"
                        onClick={() => props.onClick("nomineeDetailsForm")}
                        value="Save"
                    />
                </div>
            </form>
        </div>
    );
}

module.exports = NomineeDetailsForm;