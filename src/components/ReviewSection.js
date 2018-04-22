import React from 'react';

import PersonalInfoReviewCard from './ReviewCards/PersonalInfoReviewCard';
import ProfessionalInfoReviewCard from './ReviewCards/ProfessionalInfoReviewCard';
import AddressDetailsReviewCard from './ReviewCards/AddressDetailsReviewCard';
import NriInfoReviewCard from './ReviewCards/NriInfoReviewCard';
import BankDetailsReviewCard from './ReviewCards/BankDetailsReviewCard';
import NomineeDetailsReviewCard from './ReviewCards/NomineeDetailsReviewCard';

const ReviewSection = (props) => {
    const citizenship = props.citizenship.toUpperCase();
    return(
        <div className="review-container">
            <PersonalInfoReviewCard
                firstName={props.firstName}
                lastName={props.lastName}
                dob={props.dob}
                fatherName={props.fatherName}
                panNumber={props.panNumber}
            />
            <ProfessionalInfoReviewCard
                occupation={props.occupation}
                sourceOfWealth={props.sourceOfWealth}
                annualIncome={props.annualIncome}
                citizenship={props.citizenship}
                residenceCountry={props.residenceCountry}
            />
            <AddressDetailsReviewCard
                area={props.area}
                street={props.street}
                pincode={props.pincode}
                city={props.city}
                state={props.state}
                country={props.country}
            />
            {props.citizenship.toUpperCase() !== "INDIAN" &&
                <NriInfoReviewCard
                    nriArea={props.nriArea}
                    nriStreet={props.nriStreet}
                    nriPincode={props.nriPincode}
                    nriCity={props.nriCity}
                    nriState={props.nriState}
                    nriCountry={props.nriCountry}
                />
            }
            <BankDetailsReviewCard
                accountNumber={props.accountNumber}
                ifscCode={props.ifscCode}
                bankName={props.bankName}
                bankBranch={props.bankBranch}
            />
            <NomineeDetailsReviewCard
                nomineeFirstName={props.nomineeFirstName}
                nomineeLastName={props.nomineeLastName}
                nomineeDob={props.nomineeDob}
                nomineeArea={props.nomineeArea}
                nomineeStreet={props.nomineeStreet}
                nomineePincode={props.nomineePincode}
                nomineeCity={props.nomineeCity}
                nomineeState={props.nomineeState}
                nomineeCountry={props.nomineeCountry}
            />
            <div className="row" style={{marginBottom: "30px"}}>
                <div className="col-12 col-sm-10 col-md-9 col-lg-6 mx-auto" style={{padding: 0}}>
                    <button className="btn btn-primary btn-block no-border-radius" onClick={() => props.onClick()}>Register</button>
                </div>
            </div>
        </div>
    );
}

module.exports = ReviewSection;