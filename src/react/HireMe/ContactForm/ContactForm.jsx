import React, { useState } from 'react';
import styled from 'styled-components';
// import ReCAPTCHA from "react-google-recaptcha";

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

    const [formFields, formFieldsSet] = useState(contactFormFields);
    const [emailSending, emailSendingSet] = useState('dormant');

    const handleFormFieldOnChange = (newFormField, e) => {
        const newFormFields = formFields.map((ff) => {
            return (ff.id === newFormField.id) ? newFormField:ff;
        });

        formFieldsSet(newFormFields);
    }

    const handleFormSubmit = (recaptchaValue) => {
        emailSendingSet('sending');

        const data = {
            "name":    findFormField('contact-name', formFields).value,
            "email":   findFormField('contact-email', formFields).value,
            "message": findFormField('contact-message', formFields).value,
            "recaptchaValue": recaptchaValue,
        };

        callAxiosPost('/email/send', data, (response) => {
            emailSendingSet('success');
        });
    }

    switch(emailSending) {
        case 'sending': 
            return <Preloader message='Employing some worker bees, gimme a sec...' />;
        case 'success':
            return <SuccessMessage emailSendingSet={ emailSendingSet } />
        default: 
            return <TheForm formFields={ formFields } handleFormFieldOnChange={ handleFormFieldOnChange } handleFormSubmit={ handleFormSubmit }/>;

    }
}

export default ContactForm;

/*---------------------------
| The Form
---------------------------*/
const TheForm = ({formFields, handleFormFieldOnChange, handleFormSubmit}) => {
    const queries = useMediaQuery();

    // const reCaptchaRef = useRef();

    const handleSubmit = () => {
        // const recaptchaValue = reCaptchaRef.current.getValue();
        const recaptchaValue = 'ReCaptcha temp';
        handleFormSubmit(recaptchaValue);
    }

    return (
        <ContactFormStyled className='ContactForm'>
            <form onSubmit={ handleSubmit }>
                <FormlabelInput formField={ findFormField('contact-name', formFields) } onChange={ handleFormFieldOnChange } />
                <FormlabelInput formField={ findFormField('contact-email', formFields) } onChange={ handleFormFieldOnChange } />
                <FormlabelInput formField={ findFormField('contact-message', formFields) } onChange={ handleFormFieldOnChange } />
                {/* <div className="reCaptcha-wrapper">
                    <ReCAPTCHA
                        ref={ reCaptchaRef }
                        sitekey={ process.env.REACT_APP_RECAPTCHA_SITE_KEY }
                    />
                </div> */}
                <Button
                    type='submit'
                    display={ queries.isSmall ? 'block': 'inline-block' }
                    width={ queries.isSmall ? '100%': 'auto' }
                >
                    Send
                </Button>
            </form>
        </ContactFormStyled>
    );
}

const ContactFormStyled = styled.div`
    margin: 20px 10px;

    .reCaptcha-wrapper {
        margin: 10px 0px;
    }
`;


/*---------------------------
| Success Message
---------------------------*/
const SuccessMessage = ({emailSendingSet}) => {
    const queries = useMediaQuery();
    return (
        <SuccessMessageStyled className='SuccessMessage'>
            <h4>Message Sent</h4>
            <p>Your message was sent <b>successfully</b>, I will get back to you as soon as humanly possible.</p>
            <Button
                type='button'
                display={ queries.isSmall ? 'block': 'inline-block' }
                width={ queries.isSmall ? '100%': 'auto' }
                onClick={ () => { emailSendingSet('dormant') } }
            >
                Send Another One?
            </Button>
        </SuccessMessageStyled>
    );
}

const SuccessMessageStyled = styled.div`
    margin: 20px 0px;
`;