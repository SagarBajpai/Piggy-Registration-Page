import React from 'react';

import FormInputField from './Utils/FormInputField';
import FormButton from './Utils/FormButton';
import FormError from './Utils/FormError';

const AddressDetailsForm = (props) => {
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
                        containerClasses="col-12"
                        type="text"
                        name="street"
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
                        name="area"
                        placeholder="Area"
                        value={props.area}
                        label="Area"
                        onChange={(e) => props.onChange(e)}
                    />
                    <FormInputField
                        containerClasses="col-12 col-sm-4"
                        type="text"
                        name="city"
                        placeholder="City"
                        value={props.city}
                        label="City"
                        onChange={(e) => props.onChange(e)}
                    />
                    <FormInputField
                        containerClasses="col-12 col-sm-4"
                        type="text"
                        name="pincode"
                        placeholder="Pincode"
                        value={props.pincode}
                        label="Pincode"
                        onChange={(e) => props.onChange(e)}
                    />
                </div>
                <div className="form-row">
                    <FormInputField
                        containerClasses="col-12 col-sm-6"
                        type="text"
                        name="state"
                        placeholder="State"
                        value={props.state}
                        label="State"
                        onChange={(e) => props.onChange(e)}
                    />
                    <FormInputField
                        containerClasses="col-12 col-sm-6"
                        type="text"
                        name="country"
                        placeholder="Country"
                        value={props.country}
                        label="Country"
                        onChange={(e) => props.onChange(e)}
                    />
                </div>
                <div className="form-row">
                    <FormButton
                        containerClasses="col-12"
                        onClick={() => props.onClick("addressDetailsForm")}
                        value="Save"
                    />
                </div>
            </form>
        </div>
    );
}

module.exports = AddressDetailsForm;