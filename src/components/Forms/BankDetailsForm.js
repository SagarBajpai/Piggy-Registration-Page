import React from 'react';

import FormInputField from './Utils/FormInputField';
import FormButton from './Utils/FormButton';
import FormError from './Utils/FormError';

const BankDetailsForm = (props) => {
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
                        name="accountNumber"
                        placeholder="Account Number"
                        value={props.accountNumber}
                        label="Account Number"
                        onChange={(e) => props.onChange(e)}
                    />
                </div>
                <div className="form-row">
                    <FormInputField
                        containerClasses="col-12"
                        type="text"
                        name="ifscCode"
                        placeholder="IFSC Code"
                        value={props.ifscCode}
                        label="IFSC Code"
                        onChange={(e) => props.onChange(e)}
                    />
                </div>
                <div className="form-row">
                    <FormInputField
                        containerClasses="col-12"
                        type="text"
                        name="bankName"
                        placeholder="Bank Name"
                        value={props.bankName}
                        label="Bank Name"
                        onChange={(e) => props.onChange(e)}
                    />
                </div>
                <div className="form-row">
                    <FormInputField
                        containerClasses="col-12"
                        type="text"
                        name="bankBranch"
                        placeholder="Bank Branch"
                        value={props.bankBranch}
                        label="Bank Branch"
                        onChange={(e) => props.onChange(e)}
                    />
                </div>
                <div className="form-row">
                    <FormButton
                        containerClasses="col-12"
                        onClick={() => props.onClick("bankDetailsForm")}
                        value="Save"
                    />
                </div>
            </form>
        </div>
    );
}

module.exports = BankDetailsForm;