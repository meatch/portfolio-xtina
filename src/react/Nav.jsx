import React from 'react';
import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

const Nav = () => {

    return (
        <NavStyled className='Nav'>
            <NavLink to='/'>Porfolio</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
        </NavStyled>
    );
}

export default Nav;

const NavStyled = styled.div`
    
`;