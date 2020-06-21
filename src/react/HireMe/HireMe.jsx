import React from 'react';
import styled, { css } from 'styled-components';

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
            <PageTemplate title='Hire Me'>
                <div className="row">
                    <div className="hero">
                        <img src='/assets/img/me.jpg' alt='Mitchell and Christina Gohman' />
                    </div>
                    <div className="deets">
                        <h3>I love building things that make a difference for people.</h3>

                        <NavSocial
                            size={ 50 }
                            opacity={ .8 }
                            bgColor="rgba(19,77,95,1)"
                            iconColor="rgba(255,255,255,1)"
                        />

                        <h2>Let's Connect</h2>
                        <ContactForm />
                    </div>
                </div>
            </PageTemplate>
        </HireMeStyled>
    );
}

export default HireMe;

const HireMeStyled = styled.div`

    ${ ({queries}) => { 
        if (queries.isSmall) { 
            return css`
                .row { display: block; }
                .hero { margin-bottom: 10px; }
                .deets h3 { font-size: 30px; line-height: 90%; }
            `; 
        }
        if (queries.isMedium) { 
            return css`
                .row { display: flex; }
                .hero { flex: 2; }
                .deets { flex: 3; padding: 0px 20px; }
                .deets h3 { font-size: 45px; line-height: 90%; }
            `; 
        }
        if (queries.isLarge) { 
            return css`
                .row { display: flex; }
                .hero { flex: 2; }
                .deets { flex: 3; padding: 0px 20px; }
                .deets h3 { font-size: 65px; line-height: 90%; }
            `; 
        }
    }}

    img {
        max-width: 100%;
    }

    .hero img {
        display: block;
    }

    .deets {
        h3 { margin: 0px 0px 50px;  }
        h4 { font-size: 30px; }

        .NavSocial {
            a {
                margin: 0px 10px 0px 0px;
            }
        }
    }

`;