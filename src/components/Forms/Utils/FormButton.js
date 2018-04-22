import React from 'react';

const FormButton = (props) => {
    return(
        <div className={"form-group " + props.containerClasses}>
            <button type="button" className="btn btn-primary btn-block no-border-radius" onClick={() => props.onClick()}>{props.value}</button>
        </div>
    );
}

module.exports = FormButton;