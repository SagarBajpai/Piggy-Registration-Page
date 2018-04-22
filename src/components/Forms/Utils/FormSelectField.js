import React from 'react';

const FormSelectField = (props) => {
    const getOptionsList = (options) => {
		return options.map(item =>
			<option key={props.id + item} value={item}>{item}</option>
		);
    };
    
    return(
        <div className={"form-group " + props.containerClasses}>
			<label>{props.label}</label>
			<select className="form-control no-border-radius" name={props.name} value={props.value} onChange={(e) => props.onChange(e)}>
				{getOptionsList(props.options)}
			</select>
		</div>
    );
};

module.exports = FormSelectField;