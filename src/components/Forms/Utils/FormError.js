import React from 'react';

const FormError = (props) => {
    return(
        <div className="form-group col-12">
            <p className="form-error-text">{props.error}</p>
        </div>
    );
}

module.exports = FormError;