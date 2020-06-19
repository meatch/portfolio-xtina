import React from 'react';
import styled from 'styled-components';

/* Components ---------------------------*/
import PageTemplate from '../PageTemplate.jsx';
import Gallery from './Gallery.jsx';

const Portfolio = () => {

    return (
        <PortfolioStyled className='Portfolio'>
            <PageTemplate title='Portfolio'>
                <Gallery />
            </PageTemplate>
        </PortfolioStyled>
    );
}

export default Portfolio;

const PortfolioStyled = styled.div`

`;