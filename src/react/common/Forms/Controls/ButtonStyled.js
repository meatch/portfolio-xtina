import styled from 'styled-components';

export const ButtonStyled = styled.button`

    /* Dims */
    height: ${({height}) => `${height}px` };
    width: ${({width}) => width };
    display: ${({display}) => display };
    
    /* Box Model */
    background-color: rgb(240, 149, 76);
    margin: 0;
    padding: ${({display}) => (display === 'block') ? '0':'0 44px' };
    /* border: 2px solid #104e61; */
    border: none;
    border-radius: 4px;
    
    /* Font */
    color: #fff;
    font-size: ${({fontSize}) => `${fontSize}px` };
    font-weight: normal;
    line-height: ${({height}) => `${height - 2}px` };
    text-align: center;

    cursor: pointer;

    &:hover {
        background-color: rgb(206, 100, 16);
    }
    &.active, &:active {
        background-color: rgb(240, 149, 76);
    }
    /* currently relying on default focus styles. */
    &:focus { }

    &.disabled, &:disabled {
        opacity: .5;
        cursor: not-allowed;
    }
`;