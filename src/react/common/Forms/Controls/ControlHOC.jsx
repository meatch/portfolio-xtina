import React from 'react';

const ControlHOC = (Component) => (props) => {

    const handleFormFieldChange = (newFormField, onChange, e) => {
        newFormField.value = e.target.value;
        onChange(newFormField, e);
    }

    const newFormField = { ...props.formField };

    return (
        <>
            <Component 
                { ...props }
                onChange={ (e) => handleFormFieldChange(newFormField, props.onChange, e) }
            />
        </>
    );
}

export default ControlHOC;