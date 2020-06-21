import styled from 'styled-components';

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