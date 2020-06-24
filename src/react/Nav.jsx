import React from 'react';
import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

const Nav = () => {

    return (
        <NavStyled className='Nav'>
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
        font-size: 20px;

        text-decoration: none;
        text-transform: uppercase;

        opacity: .4;
        transition: 1s;

        &.active {
            opacity: 1;
        }
    }
`;