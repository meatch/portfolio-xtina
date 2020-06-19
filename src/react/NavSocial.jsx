import React from 'react';
import styled from 'styled-components';
import {SocialMediaIconsReact} from 'social-media-icons-react';

const NavSocial = () => {

    return (
        <NavSocialStyled className='NavSocial'>
            <SocialMediaIconsReact 
                icon="linkedin" 
                url="https://www.linkedin.com/in/mgohman/"
                roundness="20%" iconSize="5" borderColor="rgba(0,0,0,0.25)" borderWidth="0" borderStyle="solid" iconColor="rgba(19,77,95,1)" backgroundColor="rgba(255,255,255,1)" 
                size="25" 
            />
            <SocialMediaIconsReact 
                icon="github"   
                url="https://github.com/meatch"
                roundness="20%" iconSize="5" borderColor="rgba(0,0,0,0.25)" borderWidth="0" borderStyle="solid" iconColor="rgba(19,77,95,1)" backgroundColor="rgba(255,255,255,1)" 
                size="25"
            />
        </NavSocialStyled>
    );
}

export default NavSocial;

const NavSocialStyled = styled.div`
    a {
        display: inline-block;
        margin-left: 10px;
        opacity: .5;
        transition: opacity .5s;

        &:hover {
            opacity: 1;
        }
    }
`;