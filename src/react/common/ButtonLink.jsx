import React from 'react';
import styled from 'styled-components';
import classnames from 'classnames';

/* Styles ---------------------------*/
import { ButtonStyled } from './Forms/Controls/ButtonStyled.js';

const ButtonLink = (props) => {

    const { 
        href,
    
        className,

        target='_self',
    
        height=44,
        width,
        fontSize=18,
    
        type='button',
        display='inline-block', // block || inline || inline-block
    
        children,
        active = false,
        tabIndex = 0,
        ariaLabel = '',
        disabled = false,
        ariaExpanded=null,
        ariaChecked=null,
    } = props;

    const theClassName = classnames({
        'ButtonLink': true,
        [className]: className,
        [display]: true,
        'active': active,
        'disabled': disabled,
        'ariaExpanded': ariaExpanded,
        'ariaChecked': ariaChecked,
    });

    return (
        <ButtonLinkStyled 
            as='a'
            className='ButtonLink'

            className={ theClassName }
            
            height={ height }
            width={ width }
            fontSize={ fontSize }
            display={ display }

            type={ type }
            tabIndex={ tabIndex }

            active={ active }
            disabled={ disabled }

            aria-disabled={ disabled }
            aria-label={ ariaLabel }
            aria-expanded={ ariaExpanded }
            aria-checked={ ariaChecked }

            href={ href }
            target={ target }
        >
            { children } 
        </ButtonLinkStyled>
    );
}

export default ButtonLink;

const ButtonLinkStyled = styled(ButtonStyled)`
    text-decoration: none;
    display: inline-block;
`;