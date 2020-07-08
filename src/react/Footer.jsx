import React from 'react';
import styled from 'styled-components';

/* Scripts ---------------------------*/
// import { useMediaQuery } from './common/responsive.js';
import { config } from '../common/config.js';

const Footer = () => {

    return (
        <FooterStyled className='Footer'>
            <div className="inset">
                <img className='LightBulb' src="/assets/img/bulbs/bulb1-cheery.svg" alt="Light Bulb"/>
                <div className='playful'>Color • Fonts • Grids • oh my!</div>
                <a className='backToTop' href="#">Back To Top</a>
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

    img.LightBulb {
        display: block;
        max-width: 50px;
        margin: 0px auto 20px;
    }

    .playful {
        margin: 10px 0px 50px;
        font-size: 20px;

    }

    a.backToTop {
        display: block;
        width: 175px;
        line-height: 50px;
        text-align: center;
        text-decoration: none;
        background-color: #ee984a;
        color: white;
        margin: 50px auto 70px;
        font-size: 16px;
    }

`;