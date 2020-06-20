import React from 'react';
import styled from 'styled-components';
import classnames from 'classnames';

/* Components ---------------------------*/
import Input from './Controls/Input.jsx';
import Textarea from './Controls/Textarea.jsx';
import FeedbackMessage from './Validation/FeedbackMessage.jsx';

const FormLabelInput = ({
    display='block',
    formField,
    onChange
}) => {

    if (!formField) { return 'Loading...'; }


    /*---------------------------
    | Handle onChange
    ---------------------------*/
    const handleOnChange = (newFormField, e) => {

        let type = 'success';
        let message = '';


        if (newFormField.required && newFormField.value.length < 1) {
            type = 'error';
            message = 'This field is required.';
        }

        newFormField.feedback = {
            type: type,
            message: message,
        }

        onChange(newFormField, e);
    }

    /*---------------------------
    | Determine Which Control They Want
    ---------------------------*/
    let Control;
    switch(formField.type) {
        case 'teaxtarea':
            Control = Textarea;
            break;
        default:
            Control = Input;
            break;
    }

    /*---------------------------
    | Rendering
    ---------------------------*/
    const theClassName = classnames({
        'FormLabelInput': true,
        [formField.className]: formField.className,
        'required': formField.required,
        [formField.feedback.type]: true,
    });

    return (
        <FormLabelInputStyled className={ theClassName } display={ display }>
            <label htmlFor={ formField.id }>
                { formField.label }
            </label>
            <div className="input-container">
                <Control formField={ formField } onChange={ handleOnChange } />
            </div>
            <FeedbackMessage formField={ formField } />
        </FormLabelInputStyled>
    );
}

export default FormLabelInput;

const FormLabelInputStyled = styled.div`
    margin: 10px 0px;

    label {
        display: ${ ({display}) => display };
        font-weight: 700;
        margin-bottom: 5px;
    }

    .input-container {
        display: ${ ({display}) => display };
    }

    input, textarea {
        display: inline-block;
        width: 100%;
        padding: 10px;
        border-radius: 5px;

        border: solid 1px #999;
        outline: none;
        
        &:focus {
            box-shadow: 0 0 10px rgba(212, 98, 68, 0.46);
        }
    }
    
    &.error {
        input, textarea {
            border-width: 2px;
            border-color: #d40000;
        }
    }

    .FeedbackMessage { margin-left: 10px; }

    textarea {
        height: 200px;
    }
`;