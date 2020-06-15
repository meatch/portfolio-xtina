import React from 'react';
import styled from 'styled-components';

const App = () => {

    return (
        <AppStyled className='App'>
            <h1>MITCHELL GOHMAN</h1>
            <div className="wrapper">
                content
            </div> 
        </AppStyled>
    );
}

export default App;

const AppStyled = styled.div`
    background-image: url('/assets/img/backdrop.png');
    /* background-size: contain; */
    background-position: center top;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-color: #08232B;
    padding: 0 10px 50px;
    
    
    & > h1 {
        padding: 150px 0px;
        text-align: center;
        font-size: 80px;
        color: #fff;
        margin: 0px;
    }

    .wrapper {
        max-width: 1200px;
        width: 100%;
        margin: auto;
        background-color: #fff;
        padding: 10px;

        min-height: 2000px;

        border-radius: 5px;
    }
`;