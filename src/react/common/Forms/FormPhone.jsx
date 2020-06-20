import React from 'react';
import styled from 'styled-components';

/* Scripts ---------------------------*/
import { validatePhone } from '../../../common/utilities.js';

/* Components ---------------------------*/
import FormSet from './FormSet.jsx';
import FormLabelInput from './FormLabelInput.jsx';
import { AsYouType } from 'libphonenumber-js';

const FormPhone = ({phoneField, onChange }) => {

    const handleOnChange = (newFormField, e) => {
        const isInternational = newFormField.value.includes('+');
        const asYouType = (isInternational) ? new AsYouType() : new AsYouType('US');
        newFormField.value = asYouType.input(newFormField.value);
        
        const hasEnoughCharacters = (newFormField.value.length >= 9);
        const phoneIsValid = validatePhone(newFormField.value, isInternational);

        // Inherit any validation state from child.
        let { type, message } = newFormField.feedback;

        if (hasEnoughCharacters) {
            if (!phoneIsValid) {
                type = 'error';
                message += 'The phone does not appear to be valid.';
            }
        }

        newFormField.feedback = {
            type: type,
            message: message,
        }

        
        onChange([newFormField], e);
    }

    return (
        <FormPhoneStyled className='FormPhone'>
            <FormSet>
                <FormLabelInput formField={ phoneField } onChange={ handleOnChange } />
            </FormSet>
        </FormPhoneStyled>
    );
}

export default FormPhone;

const FormPhoneStyled = styled.div`
    
`;