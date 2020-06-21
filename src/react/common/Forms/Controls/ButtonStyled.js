import styled from 'styled-components';

export const ButtonStyled = styled.button`

    /* Dims */
    height: ${({height}) => `${height}px` };
    width: ${({width}) => width };
    display: ${({display}) => display };
    
    /* Box Model */
    background-color: #42707e;
    margin: 0;
    padding: ${({display}) => (display === 'block') ? '0':'0 44px' };
    border: 2px solid #104e61;
    border-radius: 4px;
    
    /* Font */
    color: #fff;
    font-size: ${({fontSize}) => `${fontSize}px` };
    font-weight: normal;
    line-height: ${({height}) => `${height - 2}px` };
    text-align: center;

    cursor: pointer;

    &:hover {
        background-color: #104e61;
    }
    &.active, &:active {
        background-color: #42707e;
    }
    /* currently relying on default focus styles. */
    &:focus { }

    &.disabled, &:disabled {
        opacity: .5;
        cursor: not-allowed;
    }
`;