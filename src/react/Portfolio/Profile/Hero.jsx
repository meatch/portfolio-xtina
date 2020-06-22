import React, { useContext } from 'react';
import styled from 'styled-components';

/* Context ---------------------------*/
import Context from '../context/store.js';

const Hero = () => {

    const { state, dispatch } = useContext(Context);

    const chosenItem = state.chosenItem;

    return (
        <HeroStyled className='Hero'>
            <div className="column column1">
                <img src={ chosenItem.image } alt={ `Portfolio: ${chosenItem.title}` } />
            </div>
            <div className="column column2">
                <h2>{ chosenItem.title }</h2>
            </div>
        </HeroStyled>
    );
}

export default Hero;

const HeroStyled = styled.div`
    display: flex;
    margin: 20px 0px;

    .column { flex: 1; }

    .column1 {
        img  {
            max-width: 100%;
            border: solid 1px #333;
        }
    }

    .column2 {
        text-align: left;
        padding: 0px 20px;

        h2 {
            margin: 0px 0px 20px;
        }

    }
`;