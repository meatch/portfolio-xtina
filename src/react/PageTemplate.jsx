import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

const PageTemplate = ({title, children}) => {

    const theTitle = `${title} :: Creative Ninja :: Christina Gohman`;


    return (
        <PageTemplateStyled className='PageTemplate'>
            <Helmet className='TitleMeta'>
                <title>{ theTitle }</title>
            </Helmet>
            { children }
        </PageTemplateStyled>
    );
}

export default PageTemplate;

const PageTemplateStyled = styled.div`
    h1 {
        font-size: 50px;
        text-transform: uppercase;
        text-align: center;
        margin: 80px 0px;
        color: #134d5f;
    }
`;