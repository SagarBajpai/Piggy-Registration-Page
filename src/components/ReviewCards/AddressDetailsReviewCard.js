import React from 'react';

import ReviewField from './Utils/ReviewField';

const AddressDetailsReviewCard = (props) => {
    return(
        <div className="row">
            <div className="col-12 col-sm-10 col-md-9 col-lg-6 mx-auto custom-card">
                <div className="custom-card-head">
                    <p className="custom-card-head-title">Address Details</p>
                </div>
                <div className="container-fluid custom-card-body">
                    <div className="row">
                        <ReviewField
                            containerClasses="col-12 col-sm-4"
                            name="Area"
                            value={props.area}
                        />
                        <ReviewField
                            containerClasses="col-12 col-sm-4"
                            name="Street"
                            value={props.street}
                        />
                        <ReviewField
                            containerClasses="col-12 col-sm-4"
                            name="Pincode"
                            value={props.pincode}
                        />
                    </div>
                    <div className="row">
                        <ReviewField
                            containerClasses="col-12 col-sm-4"
                            name="City"
                            value={props.city}
                        />
                        <ReviewField
                            containerClasses="col-12 col-sm-4"
                            name="State"
                            value={props.state}
                        />
                        <ReviewField
                            containerClasses="col-12 col-sm-4"
                            name="Country"
                            value={props.country}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

module.exports = AddressDetailsReviewCard;