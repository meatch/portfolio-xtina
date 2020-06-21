import React, { useState } from 'react';
import styled from 'styled-components';

/* Scripts ---------------------------*/
import { useMediaQuery } from '../../common/responsive.js';
import { findFormField } from '../../common/Forms/utilities.js';
import { contactFormFields } from './contactFields.js';
import { callAxiosPost } from '../../../common/axios.js';

/* Components ---------------------------*/
import Button from '../../common/Forms/Controls/Button.jsx';
import FormlabelInput from '../../common/Forms/FormLabelInput.jsx';
import Preloader from '../../common/Preloader.jsx';


const ContactForm = () => {

    const queries = useMediaQuery();

    const [formFields, formFieldsSet] = useState(contactFormFields);
    const [emailSending, emailSendingSet] = useState('dormant');

    const handleOnChange = (newFormField, e) => {
        const newFormFields = formFields.map((ff) => {
            return (ff.id === newFormField.id) ? newFormField:ff;
        });

        formFieldsSet(newFormFields);
    }

    const handleFormSubmit = () => {
        emailSendingSet('sending');

        const data = {
            "name":    findFormField('contact-name', formFields).value,
            "email":   findFormField('contact-email', formFields).value,
            "message": findFormField('contact-message', formFields).value,
        };

        callAxiosPost('/email/send', data, (response) => {
            emailSendingSet('success');
        });
    }

    switch(emailSending) {
        case 'sending': 
            return <Preloader message='Employing some worker bees for this, one sec...' />;
        case 'success':
            return <p>Your message was sent successfully, I will get back to you as soon as humanly possible.</p>;
        default:
            return (
                <ContactFormStyled className='ContactForm'>
                    <form>
                        <FormlabelInput formField={ findFormField('contact-name', formFields) } onChange={ handleOnChange } />
                        <FormlabelInput formField={ findFormField('contact-email', formFields) } onChange={ handleOnChange } />
                        <FormlabelInput formField={ findFormField('contact-message', formFields) } onChange={ handleOnChange } />
                        <Button
                            type='button'
                            display={ queries.isSmall ? 'block': 'inline-block' }
                            width={ queries.isSmall ? '100%': 'auto' }
                            onClick={ handleFormSubmit }
                        >
                            Send
                        </Button>
                    </form>
                </ContactFormStyled>
            );

    }
}

export default ContactForm;

const ContactFormStyled = styled.div`
    margin: 20px 0px;
`;