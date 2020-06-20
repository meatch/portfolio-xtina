import React from 'react';
import styled from 'styled-components';
import classnames from 'classnames';

const FeedbackMessage = ({formField}) => {

    const theClassName = classnames({
        'FeedbackMessage': true,
        [formField.feedback.type]: formField.feedback.type,
    });


    return (
        formField.feedback.message &&
        <ErrorMessageStyled className={ theClassName }>
            { formField.feedback.message }
        </ErrorMessageStyled>
    );
}

export default FeedbackMessage;

const ErrorMessageStyled = styled.div`
    &.info {
        color: green; 
    }
    &.error {
        color: red; 
    }
`;