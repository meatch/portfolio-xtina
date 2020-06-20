import React from 'react';
import styled from 'styled-components';

/* Scripts ---------------------------*/
import { titleCase } from '../../../common/utilities.js';

/* Components ---------------------------*/
import FormSet from './FormSet.jsx';
import FormLabelInput from './FormLabelInput.jsx';

const FormName = ({firstField, lastField, onChange }) => {

    // Always update data to be Title Case
    const handleOnChange = (newFormField, e) => {
        newFormField.value = titleCase(newFormField.value);
        onChange([newFormField], e);
    }

    return (
        <FormNameStyled className='FormName'>
            <FormSet>
                <FormLabelInput formField={ firstField } onChange={ handleOnChange } />
                <FormLabelInput formField={ lastField }  onChange={ handleOnChange } />
            </FormSet>
        </FormNameStyled>
    );
}

export default FormName;

const FormNameStyled = styled.div`
    
`;