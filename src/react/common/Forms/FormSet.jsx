import React from 'react';
import styled from 'styled-components';

const FormSet = ({children}) => {

    return (
        <FormSetStyled className='FormSet'>
            { children }
        </FormSetStyled>
    );
}

export default FormSet;

const FormSetStyled = styled.div`
    display: flex;
    .FormLabelInput {
        flex: 1;
        margin-right: 20px;

        &:last-child {
            margin-right: 0;
        }

    }
`;