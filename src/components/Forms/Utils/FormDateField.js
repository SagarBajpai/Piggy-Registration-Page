import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';
import '../../../css/formDateField.css';

const FormDateField = (props) => {
    return(
        <div className={"form-group " + props.containerClasses}>
			<label>{props.label}</label>
			<DatePicker
                placeholderText={props.placeholder}
                selected={props.value}
                onChange={(date) => props.onDateChange(date)}
            />
		</div>
    );
};

module.exports = FormDateField;