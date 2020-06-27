import React from 'react';
import styled, { css } from 'styled-components';

/* Scripts ---------------------------*/
import { useMediaQuery } from './common/responsive.js';
import { config } from '../common/config.js';

/* Components ---------------------------*/
import Nav from './Nav.jsx';
import NavSocial from './NavSocial.jsx';

const Header = () => {

    const queries = useMediaQuery();

    return (
        <HeaderStyled className='Header' queries={ queries }>
            <div className="inset">
                <img className='LightBulb' src="/assets/img/bulbs/bulb1-cheery.svg" alt="Light Bulb"/>
                <h2>
                    <div className='fullname' dangerouslySetInnerHTML={{ __html: config.header.fullname } } />
                    <div className='title' dangerouslySetInnerHTML={{ __html: config.header.title } } />
                </h2>
                <nav className='Primary'>
                    <Nav />
                    <NavSocial 
                        size={ queries.isSmall ? 25 : 35 }
                    />
                </nav>
            </div>
        </HeaderStyled>
    );
}

export default Header;

const HeaderStyled = styled.header`
    background-color: #fff;

    img.LightBulb {
        display: block;
        margin: 50px auto 0px;
        width: 150px;
        height: auto;
    }


    .inset > h2 {
        text-align: center;
        text-transform: uppercase;
        color: #55847E;
        margin: 0px;

        .fullname { font-size: 50px; margin-bottom: 5px; }
        .title { font-size: 20px; color: #153E5A; }

        ${ ({queries}) => { 
            if (queries.isSmall) { 
                return css`padding: 0px;`;
            }
            if (queries.isMedium) { 
                return css`padding: 0px;`;
            }
            if (queries.isLarge) { 
                return css`padding: 0px;`;
            }
        }}
    }
    
`;