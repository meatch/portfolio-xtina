import React from 'react';
import styled from 'styled-components';

/* Components ---------------------------*/
import PageTemplate from '../PageTemplate.jsx';

const Contact = () => {

    return (
        <ContactStyled className='Contact'>
            <PageTemplate title='Contact'>
                Contact Content
            </PageTemplate>
        </ContactStyled>
    );
}

export default Contact;

const ContactStyled = styled.div`
    
`;