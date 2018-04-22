import React from 'react';

import FormInputField from './Utils/FormInputField';
import FormSelectField from './Utils/FormSelectField';
import FormButton from './Utils/FormButton';
import FormError from './Utils/FormError';
import FormAutosuggestField from './Utils/FormAutosuggestField';

import citizenshipData from '../../data/citizenship.json';
import countryData from '../../data/country.json';

const ProfessionalInfoForm = (props) => {
    return(
        <div className="col-12 col-sm-7 col-md-6 col-lg-5 col-xl-4 mx-auto form-container custom-card">
            <form onSubmit={(e) => props.formPreventDefault(e)}>
                <div className="form-row">
                    <FormError
                        error={props.error}
                    />
                </div>
                <div className="form-row">
                    <FormSelectField
                        containerClasses="col-12"
                        name="occupation"
                        value={props.occupation}
                        label="Occupation"
                        options={["Student", "Self-employed", "Government Employee", "Other"]}
                        id="occupation-"
                        onChange={(e) => props.onChange(e)}
                    />
                </div>
                <div className="form-row">
                    <FormInputField
                        containerClasses="col-12 col-sm-6"
                        type="text"
                        name="sourceOfWealth"
                        placeholder="Source of Wealth"
                        value={props.sourceOfWealth}
                        label="Source of Wealth"
                        onChange={(e) => props.onChange(e)}
                    />
                    <FormSelectField
                        containerClasses="col-12 col-sm-6"
                        name="annualIncome"
                        value={props.annualIncome}
                        label="Annual Income"
                        options={["< 1,00,000", "1,00,000 to 5,00,000", "> 5,00,000"]}
                        id="annual-income-"
                        onChange={(e) => props.onChange(e)}
                    />
                </div>
                <div className="form-row">
                    <FormAutosuggestField
                        containerClasses="col-12 col-sm-6"
                        type="text"
                        name="citizenship"
                        placeholder="Citizenship"
                        value={props.citizenship}
                        label="Citizenship"
                        data={citizenshipData}
                        onChange={(e, value) => props.onCitizenshipAutosuggestChange(e, value)}
                    />
                    <FormAutosuggestField
                        containerClasses="col-12 col-sm-6"
                        type="text"
                        name="residenceCountry"
                        placeholder="Residence Country"
                        value={props.residenceCountry}
                        label="Residence Country"
                        data={countryData}
                        onChange={(e, value) => props.onResidenceCountryAutosuggestChange(e, value)}
                    />
                </div>
                <div className="form-row">
                    <FormButton
                        containerClasses="col-12"
                        onClick={() => props.onClick("professionalInfoForm")}
                        value="Save"
                    />
                </div>
            </form>
        </div>
    );
}

module.exports = ProfessionalInfoForm;