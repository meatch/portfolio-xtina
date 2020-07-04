import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

/* Scripts ---------------------------*/
import { useMediaQuery } from '../common/responsive.js';

const BackToTop = () => {
    const [isVisible, isVisibleSet] = useState(false);

    const queries = useMediaQuery();

    useEffect(() => {
        const isVisibleCheck = () => {
            const scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
            isVisibleSet(scrollTop >= 1000);
        }

        window.addEventListener('scroll', isVisibleCheck);
        
        // cleanup
        return () => {
            window.removeEventListener('scroll', isVisibleCheck);
        }

    }, []);

    return (
        isVisible &&
        <BackToTopStyled className='BackToTop' href="#"  queries={ queries }>
            <span className="triangle"></span>
            Back to Top
        </BackToTopStyled>
    );
}

export default BackToTop;

const BackToTopStyled = styled.a`
    display: block;
    width: 250px;
    text-align: center;
    text-decoration: none;
    color: #ee984a;

    background-color: rgba(255, 255, 255, 0.87);
    padding: 10px;


    position: fixed;
    left: 25px;
    bottom: 25px;
    


    ${ ({queries}) => { 
        if (queries.isSmall || queries.isMedium) { 
            return css`left: 50%; transform: translate(-50%, 0);`;
        }
    }}



    .triangle {
        display: block;
        margin: 0 auto 10px;
        width: 0;
        height: 0;
        border-left: 20px solid transparent;
        border-right: 20px solid transparent;
        border-bottom: 20px solid #ee984a;
    }
`;