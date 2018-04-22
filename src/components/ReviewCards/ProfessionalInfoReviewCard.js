import React from 'react';

import ReviewField from './Utils/ReviewField';

const ProfessionalInfoReviewCard = (props) => {
    return(
        <div className="row">
            <div className="col-12 col-sm-10 col-md-9 col-lg-6 mx-auto custom-card">
            <div className="custom-card-head">
                    <p className="custom-card-head-title">Professional Information</p>
                </div>
                <div className="custom-card-body">
                    <div className="container-fluid custom-card-body">
                        <div className="row">
                            <ReviewField
                                containerClasses="col-12 col-sm-6"
                                name="Occupation"
                                value={props.occupation}
                            />
                            <ReviewField
                                containerClasses="col-12 col-sm-6"
                                name="Source of Wealth"
                                value={props.sourceOfWealth}
                            />
                        </div>
                        <div className="row">
                            <ReviewField
                                containerClasses="col-12 col-sm-4"
                                name="Annual Income"
                                value={props.annualIncome}
                            />
                            <ReviewField
                                containerClasses="col-12 col-sm-4"
                                name="Citizenship"
                                value={props.citizenship}
                            />
                            <ReviewField
                                containerClasses="col-12 col-sm-4"
                                name="Residence Country"
                                value={props.residenceCountry}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

module.exports = ProfessionalInfoReviewCard;