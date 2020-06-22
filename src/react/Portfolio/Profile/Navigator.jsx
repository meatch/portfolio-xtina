import React, { useContext } from 'react';
import styled from 'styled-components';

/* Context ---------------------------*/
import Context from '../context/store.js';
import { profileShowSet, chosenItemSet } from '../context/actions.js';

/* Components ---------------------------*/
import Button from '../../common/Forms/Controls/Button.jsx';

const Navigator = () => {

    const { state, dispatch } = useContext(Context);
    
    const items = state.items;
    const chosenItem = state.chosenItem;
    
    const getPrevItem = () => {
        const prevSortOrder = parseInt(chosenItem.sortOrder) - 1;

        return (prevSortOrder === 0)
                ? null
                : items.find((item) => (parseInt(item.sortOrder) === prevSortOrder));
    };

    const getNextItem = () => {
        const nextSortOrder = parseInt(chosenItem.sortOrder) + 1;

        return (nextSortOrder > items.length)
                ? null
                : items.find((item) => {
                    return (parseInt(item.sortOrder) === nextSortOrder);
                });
    };

    const prevItem = getPrevItem();
    const nextItem = getNextItem();

    return (
        <NavigatorStyled className='Navigator'>
            {
                prevItem &&
                <Button onClick={ () => { dispatch(chosenItemSet(prevItem))  } }>Prev</Button>
            }
            <Button onClick={ () => { dispatch(profileShowSet(false)) } }>Back to Gallery</Button>
            {
                nextItem &&
                <Button onClick={ () => { dispatch(chosenItemSet(nextItem))  } }>Next</Button>
            }
        </NavigatorStyled>
    );
}

export default Navigator;

const NavigatorStyled = styled.div`

    text-align: center;
    
`;