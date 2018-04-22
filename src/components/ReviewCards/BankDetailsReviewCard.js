import React from 'react';

import ReviewField from './Utils/ReviewField';

const BankDetailsReviewCard = (props) => {
    return(
        <div className="row">
            <div className="col-12 col-sm-10 col-md-9 col-lg-6 mx-auto custom-card">
                <div className="custom-card-head">
                    <p className="custom-card-head-title">Bank Details</p>
                </div>
                <div className="container-fluid custom-card-body">
                    <div className="row">
                        <ReviewField
                            containerClasses="col-12 col-sm-6"
                            name="Account Number"
                            value={props.accountNumber}
                        />
                        <ReviewField
                            containerClasses="col-12 col-sm-6"
                            name="IFSC Code"
                            value={props.ifscCode}
                        />
                    </div>
                    <div className="row">
                        <ReviewField
                            containerClasses="col-12 col-sm-6"
                            name="Bank Name"
                            value={props.bankName}
                        />
                        <ReviewField
                            containerClasses="col-12 col-sm-6"
                            name="Bank Branch"
                            value={props.bankBranch}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

module.exports = BankDetailsReviewCard;