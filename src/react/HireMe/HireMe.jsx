import React from 'react';
import styled from 'styled-components';

/* Scripts ---------------------------*/
import { useMediaQuery } from '../common/responsive.js';

/* Components ---------------------------*/
import PageTemplate from '../PageTemplate.jsx';
import NavSocial from '../NavSocial.jsx';
import ContactForm from './ContactForm/ContactForm.jsx';

const HireMe = () => {

    const queries = useMediaQuery();

    return (
        <HireMeStyled className='HireMe' queries={ queries }>
            <PageTemplate title='Contact'>
                <div className="deets">
                    <img className='hero' src='/assets/img/me.png' alt='Mitchell and Christina Gohman' />
                    <h3>
                        <img className='LightBulb' src="/assets/img/bulbs/bulb1-cheery.svg" alt="Light Bulb"/>
                        Let’s Shine Together!
                    </h3>

                    <ul className='downloadables'>
                        <li><a href='/assets/img/Christina.Gohman.Resume.pdf' target='_blank'>My Resume</a></li>
                        <li><a href='/assets/img/Christina.Gohman.Portfolio.pdf' target='_blank'>My PDF Portfolio</a></li>
                    </ul>

                    <NavSocial
                        size={ 50 }
                        opacity={ .8 }
                        bgColor="rgb(84, 132, 126)"
                        iconColor="rgba(255,255,255,1)"
                    />

                    <ContactForm />
                </div>
            </PageTemplate>
        </HireMeStyled>
    );
}

export default HireMe;

const HireMeStyled = styled.div`

    .deets {
        max-width: 500px;
        margin: auto;

        padding: 50px 0px;

        img {
            max-width: 100%;
        }
        img.hero {
            display: block;
            box-shadow: 7px 5px 6px 0px rgba(0, 0, 0, 0.17);
            margin-bottom: 50px;
        }

        h3 { 
            margin: 0px 0px 50px;  
            text-align: center;
            color: rgb(84, 132, 126);
            font-size: 30px; 
            line-height: 90%;
            img {
                width: auto;
                height: 35px;
                margin-right: 10px;
                position: relative;
                top: 5px;
            }
        }

        .downloadables {
            margin: 0px;
            padding: 0px;
            text-align: center;
            li { list-style-type: none; }

            a {
                text-transform: uppercase;
                display: block;
                text-decoration: none;
                color: orange;
                font-weight: bold;
                margin: 3px 0px;
            }
        }
        h4 { font-size: 30px; }

        .NavSocial {
            text-align: center;
            margin: 50px 0px;
            a {
                margin: 0px 10px 0px 0px;
            }
        }
    }

`;