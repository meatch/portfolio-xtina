import React from 'react';
import styled from 'styled-components';
import {SocialMediaIconsReact} from 'social-media-icons-react';

/* Scripts ---------------------------*/
import { config } from '../common/config.js';


const NavSocial = ({
    size=25,
    bgColor="rgba(255,255,255,1)",
    iconColor="rgba(19,77,95,1)",
    opacity=".5"
}) => {

    return (
        <NavSocialStyled className='NavSocial' opacity={ opacity }>
            <SocialMediaIconsReact
                icon="linkedin"
                url="https://www.linkedin.com/in/mgohman/"
                roundness="20%" iconSize="5" borderColor="rgba(0,0,0,0.25)" borderWidth="0" borderStyle="solid" iconColor={ iconColor } backgroundColor={ bgColor } 
                size={ size }
            />
            <SocialMediaIconsReact 
                icon="github"
                url="https://github.com/meatch"
                roundness="20%" iconSize="5" borderColor="rgba(0,0,0,0.25)" borderWidth="0" borderStyle="solid" iconColor={ iconColor } backgroundColor={ bgColor } 
                size={ size }
            />
            <SocialMediaIconsReact
                icon="mail"
                url={ `mailto:${config.author.email}?subject=Was browing your website and...&body=Hey ${config.author.name.preferred}, %0D%0A %0D%0A Was looking at your website and...` }
                roundness="20%" iconSize="5" borderColor="rgba(0,0,0,0.25)" borderWidth="0" borderStyle="solid" iconColor={ iconColor } backgroundColor={ bgColor } 
                size={ size }
            />
        </NavSocialStyled>
    );
}

export default NavSocial;

const NavSocialStyled = styled.div`
    a {
        display: inline-block;
        margin-left: 10px;
        opacity: ${({opacity}) => opacity};
        transition: opacity .5s;

        &:hover {
            opacity: 1;
        }
    }
`;