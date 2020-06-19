import React from 'react';
import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

const Nav = () => {

    return (
        <NavStyled className='Nav'>
            <NavLink to='/' exact>Porfolio</NavLink>
            <NavLink to='/hireme'>Hire Me</NavLink>
        </NavStyled>
    );
}

export default Nav;

const NavStyled = styled.div`
    a {
        display: inline-block;
        color: white;
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