import React from 'react';

import ReviewField from './Utils/ReviewField';

const PersonalInfoReviewCard = (props) => {
    return(
        <div className="row">
            <div className="col-12 col-sm-10 col-md-9 col-lg-6 mx-auto custom-card">
                <div className="custom-card-head">
                    <p className="custom-card-head-title">Personal Information</p>
                </div>
                <div className="container-fluid custom-card-body">
                    <div className="row">
                        <ReviewField
                            containerClasses="col-12 col-sm-4"
                            name="First Name"
                            value={props.firstName}
                        />
                        <ReviewField
                            containerClasses="col-12 col-sm-4"
                            name="Last Name"
                            value={props.lastName}
                        />
                        <ReviewField
                            containerClasses="col-12 col-sm-4"
                            name="Date of Birth"
                            value={props.dob}
                        />
                    </div>
                    <div className="row">
                        <ReviewField
                            containerClasses="col-12 col-sm-6"
                            name="Father's Name"
                            value={props.fatherName}
                        />
                        <ReviewField
                            containerClasses="col-12 col-sm-6"
                            name="PAN Number"
                            value={props.panNumber}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

module.exports = PersonalInfoReviewCard;