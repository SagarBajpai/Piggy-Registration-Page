import React from 'react';

const FormInputField = (props) => {
	return(
		<div className={"form-group " + props.containerClasses}>
			<label>{props.label}</label>
			<input type={props.type} className="form-control no-border-radius" name={props.name} value={props.value} placeholder={props.placeholder} onChange={(e) => props.onChange(e)} />
		</div>
	);
}

module.exports = FormInputField;