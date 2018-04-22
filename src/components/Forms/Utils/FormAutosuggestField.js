import React from 'react';
import Autosuggest from 'react-autosuggest';

import '../../../css/formAutosuggestField.css';

export default class FormAutosuggestField extends React.Component {
    constructor() {
        super();

        this.state = {
            suggestions: []
        };
        this.suggestionData = [];
    }

    componentWillMount() {
        this.suggestionData = this.props.data;
    }

    getSuggestions = value => {
        const inputValue = value.trim().toLowerCase();
        const inputLength = inputValue.length;
    
        return inputLength === 0 ? [] : this.suggestionData.filter(lang =>
            lang.name.toLowerCase().slice(0, inputLength) === inputValue
        );
    };
    
    getSuggestionValue = suggestion => suggestion.name;
    
    renderSuggestion = suggestion => (
        <div>
            {suggestion.name}
        </div>
    );

    onSuggestionsFetchRequested = ({ value }) => {
        this.setState({
            suggestions: this.getSuggestions(value)
        });
    };

    onSuggestionsClearRequested = () => {
        this.setState({
            suggestions: []
        });
    };
  
    render() {
        const { suggestions } = this.state;

        const inputProps = {
            placeholder: this.props.placeholder,
            name: this.props.name,
            value: this.props.value,
            type: this.props.type,
            onChange: (e, value) => this.props.onChange(e, value)
        };

        return (
            <div className={"form-group " + this.props.containerClasses}>
                <label>{this.props.label}</label>
                <Autosuggest
                    suggestions={suggestions}
                    onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                    onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                    getSuggestionValue={this.getSuggestionValue}
                    renderSuggestion={this.renderSuggestion}
                    inputProps={inputProps}
                />
            </div>
        );
    }
}