import React from 'react';
import ControlHOC from './ControlHOC.jsx';

const Input = ({formField, onChange}) => {

    const { 
        id,
        label,
        placeholder,
        required=false,
        value="",
        type='text',
    } = formField;

    return (
        <input
            id={ id }
            required= { required }
            placeholder= { (placeholder) ? placeholder : label }
            onChange= { onChange }

            value= { value }
            type= { type }
        />
    );
}

export default ControlHOC(Input);