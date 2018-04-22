import React from 'react';

import ReviewField from './Utils/ReviewField';

const NomineeDetailsReviewCard = (props) => {
    return(
        <div className="row">
            <div className="col-12 col-sm-10 col-md-9 col-lg-6 mx-auto custom-card">
                <div className="custom-card-head">
                    <p className="custom-card-head-title">Nominee Details</p>
                </div>
                    <div className="container-fluid custom-card-body">
                        <div className="row">
                            <ReviewField
                                containerClasses="col-12 col-sm-4"
                                name="First Name"
                                value={props.nomineeFirstName}
                            />
                            <ReviewField
                                containerClasses="col-12 col-sm-4"
                                name="Last Name"
                                value={props.nomineeLastName}
                            />
                            <ReviewField
                                containerClasses="col-12 col-sm-4"
                                name="Date of Birth"
                                value={props.nomineeDob}
                            />
                        </div>
                        <div className="row">
                            <ReviewField
                                containerClasses="col-12 col-sm-4"
                                name="Area"
                                value={props.nomineeArea}
                            />
                            <ReviewField
                                containerClasses="col-12 col-sm-4"
                                name="Street"
                                value={props.nomineeStreet}
                            />
                            <ReviewField
                                containerClasses="col-12 col-sm-4"
                                name="Pincode"
                                value={props.nomineePincode}
                            />
                        </div>
                        <div className="row">
                            <ReviewField
                                containerClasses="col-12 col-sm-4"
                                name="City"
                                value={props.nomineeCity}
                            />
                            <ReviewField
                                containerClasses="col-12 col-sm-4"
                                name="State"
                                value={props.nomineeState}
                            />
                            <ReviewField
                                containerClasses="col-12 col-sm-4"
                                name="Country"
                                value={props.nomineeCountry}
                            />
                        </div>
                    </div>
            </div>
        </div>
    );
}

module.exports = NomineeDetailsReviewCard;