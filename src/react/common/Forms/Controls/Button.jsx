import React from 'react';
import keycode from 'keycode';
import classnames from 'classnames';
import styled from 'styled-components';

const Button = (props) => {
    const {
        className,

        height=44,
        width,
        fontSize=18,

        type='button',
        display='inline-block', // block || inline || inline-block

        children,

        onClick,

        active = false,
        tabIndex = 0,
        ariaLabel = '',
        disabled = false,
        ariaExpanded=null,
        ariaChecked=null,

        stopPropagation=false,

    } = props;

    const keyboardHandler = (e) => {
        // if button type='submit' we want the form to submit as default
        // If no onClick method provided, treat as default.
        if (stopPropagation) { e.stopPropagation(); }
        if (onClick) {
            switch(keycode(e)) {
                case 'enter':
                case 'space':
                    if (type !== 'submit')  { e.preventDefault(); }
                    onClick(e);
                    break;
                default:
                    return;
            }
        }
    };

    const theClassName = classnames({
        'Button': true,
        [className]: className,
        [display]: true,
        'active': active,
        'disabled': disabled,
        'ariaExpanded': ariaExpanded,
        'ariaChecked': ariaChecked,
    });
    
    return(
        <ButtonStyled
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

            onClick={ onClick }
            onKeyDown={ keyboardHandler }
        >
            { children }
        </ButtonStyled>
    );
};

/**
 * Button Styles
 */
export const ButtonStyled = styled.button`

    /* Dims */
    height: ${({height}) => `${height}px` };
    width: ${({width}) => width };
    display: ${({display}) => display };
    
    /* Box Model */
    background-color: #de6444;
    margin: 0;
    padding: ${({display}) => (display === 'block') ? '0':'0 44px' };
    border: 2px solid #c34c2c;
    border-radius: 4px;
    
    /* Font */
    color: #fff;
    font-size: ${({fontSize}) => `${fontSize}px` };
    font-weight: normal;
    line-height: ${({height}) => `${height - 2}px` };
    text-align: center;

    cursor: pointer;

    &:hover {
        background-color: #c34c2c;
    }
    &.active, &:active {
        background-color: #9a391f;
    }
    /* currently relying on default focus styles. */
    &:focus { }

    &.disabled, &:disabled {
        opacity: .5;
        cursor: not-allowed;
    }

`;

export default Button;