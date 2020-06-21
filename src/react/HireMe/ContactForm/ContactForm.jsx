import React, { useState } from 'react';
import styled from 'styled-components';

/* Scripts ---------------------------*/
import { useMediaQuery } from '../../common/responsive.js';
import { findFormField } from '../../common/Forms/utilities.js';
import { contactFormFields } from './contactFields.js';

/* Components ---------------------------*/
import Button from '../../common/Forms/Controls/Button.jsx';
import FormlabelInput from '../../common/Forms/FormLabelInput.jsx';


const ContactForm = () => {

    const queries = useMediaQuery();

    const [formFields, formFieldsSet] = useState(contactFormFields);

    const handleOnChange = (newFormField, e) => {
        console.log('newFormField, e', newFormField, e);

        const newFormFields = formFields.map((ff) => {
            return (ff.id === newFormField.id) ? newFormField:ff;
        });

        formFieldsSet(newFormFields);
    }

    return (
        <ContactFormStyled className='ContactForm'>
            <form>
                <FormlabelInput formField={ findFormField('contact-name', formFields) } onChange={ handleOnChange } />
                <FormlabelInput formField={ findFormField('contact-email', formFields) } onChange={ handleOnChange } />
                <FormlabelInput formField={ findFormField('contact-message', formFields) } onChange={ handleOnChange } />
                <Button
                    display={ queries.isSmall ? 'block': 'inline-block' }
                    width={ queries.isSmall ? '100%': 'auto' }
                >
                    Send
                </Button>
            </form>
        </ContactFormStyled>
    );
}

export default ContactForm;

const ContactFormStyled = styled.div`
    margin: 20px 0px;
`;