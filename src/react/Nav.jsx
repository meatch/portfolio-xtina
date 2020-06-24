import React from 'react';
import styled from 'styled-components';

/* Scripts ---------------------------*/
import { useMediaQuery } from './common/responsive.js';

/* Components ---------------------------*/
import { NavLink } from 'react-router-dom';

const Nav = () => {

    const queries = useMediaQuery();

    return (
        <NavStyled className='Nav' queries={ queries }>
            <NavLink to='/' exact>Work</NavLink>
            <NavLink to='/hireme'>Contact</NavLink>
        </NavStyled>
    );
}

export default Nav;

const NavStyled = styled.div`
    a {
        display: inline-block;
        color: #F0954C;
        margin-right: 10px;
        font-family: 'Oswald', sans-serif;
        font-size: ${({queries}) => {
            return (queries.isSmall) ? `20px`:`25px`
        }};

        text-decoration: none;
        text-transform: uppercase;

        opacity: .4;
        transition: 1s;

        &.active {
            opacity: 1;
        }
    }
`;