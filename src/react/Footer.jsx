import React from 'react';
import styled from 'styled-components';

/* Scripts ---------------------------*/
import { useMediaQuery } from './common/responsive.js';
import { config } from '../common/config.js';

const Footer = () => {

    return (
        <FooterStyled className='Footer'>
            <div className="inset">
                <img className='LightBulb' src="/assets/img/bulbs/bulb1-cheery.svg" alt="Light Bulb"/>
                <div>Color • Fonts • Grids • oh my!</div>

                <div className='tagline' dangerouslySetInnerHTML={{ __html: config.footer.tagline } } />
                <div className='copyright' dangerouslySetInnerHTML={{ __html: config.footer.copyright } } />
            </div>
        </FooterStyled>
    );
}

export default Footer;

const FooterStyled = styled.footer`
    background-color: #fff;
    color: #658d98;
    font-size: 12px;
    text-align: center;
    padding: 100px 20px;
`;