import React from 'react';

import ReviewField from './Utils/ReviewField';

const NriInfoReviewCard = (props) => {
    return(
        <div className="row">
            <div className="col-12 col-sm-10 col-md-9 col-lg-6 mx-auto custom-card">
                <div className="custom-card-head">
                    <p className="custom-card-head-title">NRI Information</p>
                </div>
                <div className="container-fluid custom-card-body">
                    <div className="row">
                        <ReviewField
                            containerClasses="col-12 col-sm-4"
                            name="Area"
                            value={props.nriArea}
                        />
                        <ReviewField
                            containerClasses="col-12 col-sm-4"
                            name="Street"
                            value={props.nriStreet}
                        />
                        <ReviewField
                            containerClasses="col-12 col-sm-4"
                            name="Pincode"
                            value={props.nriPincode}
                        />
                    </div>
                    <div className="row">
                        <ReviewField
                            containerClasses="col-12 col-sm-4"
                            name="City"
                            value={props.nriCity}
                        />
                        <ReviewField
                            containerClasses="col-12 col-sm-4"
                            name="State"
                            value={props.nriState}
                        />
                        <ReviewField
                            containerClasses="col-12 col-sm-4"
                            name="Country"
                            value={props.nriCountry}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

module.exports = NriInfoReviewCard;