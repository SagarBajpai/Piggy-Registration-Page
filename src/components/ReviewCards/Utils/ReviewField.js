import React from 'react';

const ReviewField = (props) => {
    return(
        <div className={props.containerClasses}>
            <p className="review-field-name">{props.name}</p>
            <p className="review-field-value">{props.value}</p>
        </div>
    );
}

module.exports = ReviewField;