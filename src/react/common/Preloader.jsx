import React from 'react';
import ReactSVG from 'react-svg';
import styled from 'styled-components';

const Preloader = ({message}) => {
    return (
        <PreloaderStyled className="preloader">
            <div className="inner">
                <ReactSVG src='/assets/img/preloader.svg' />
            </div>
            {
                message &&
                <div className='message'>{ message }</div>
            }
        </PreloaderStyled>
    );
}

export default Preloader;

const PreloaderStyled = styled.div`

    .inner {
        width: 200px;
        height: 200px;
        margin: auto;
    }

    .message {
        margin: 10px 0px;
        text-align: center;
    }

`;