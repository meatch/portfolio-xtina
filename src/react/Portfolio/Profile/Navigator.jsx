import React, { useContext } from 'react';
import styled from 'styled-components';

/* Context ---------------------------*/
import Context from '../context/store.js';
import { profileShowSet, chosenItemSet } from '../context/actions.js';

/* Components ---------------------------*/
import Button from '../../common/Forms/Controls/Button.jsx';

const Navigator = () => {

    const { state, dispatch } = useContext(Context);
    
    const chosenItem = state.chosenItem;
    
    // Get Previous and Next Items based on Chosen Item
    const prevItem = {};
    const nextItem = {};

    return (
        <NavigatorStyled className='Navigator'>
            <Button onClick={ () => { dispatch(chosenItemSet(prevItem))  } }>Prev</Button>
            <Button onClick={ () => { dispatch(profileShowSet(false)) } }>Back to Gallery</Button>
            <Button onClick={ () => { dispatch(chosenItemSet(nextItem))  } }>Next</Button>
        </NavigatorStyled>
    );
}

export default Navigator;

const NavigatorStyled = styled.div`
    
`;