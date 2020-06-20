import React from 'react';
import ControlHOC from './ControlHOC.jsx';

const Select = ({formField, onChange}) => {

    const { 
        id,
        required=false,
        value="",
        options=[],
    } = formField;


    const renderOptions = () => {
        return options.map((o,idx) => {
            return <option key={ idx } value={o.value}>{o.text}</option>
        });
    }

    return (
        <select
            id={ id }
            required= { required }
            onChange= { onChange }
            value= { value }
        >
            { renderOptions() }
        </select>
    );
}

export default ControlHOC(Select);