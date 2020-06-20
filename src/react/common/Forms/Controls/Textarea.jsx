import React from 'react';
import ControlHOC from './ControlHOC.jsx';

const Textarea = ({formField, onChange}) => {

    const { 
        id,
        label,
        placeholder,
        required=false,
        rows=4,
        cols=50,
        value="",
    } = formField;

    return (
        <textarea
            id={ id }
            required= { required }
            placeholder= { (placeholder) ? placeholder : label }
            onChange= { onChange }

            rows={ rows }
            cols={ cols }
            value= { value }
        />
    );
}

export default ControlHOC(Textarea);
