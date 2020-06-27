import React, { useContext } from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faCaretLeft,
    faCaretRight,
} from '@fortawesome/free-solid-svg-icons';

/* Context ---------------------------*/
import Context from '../context/store.js';
import { profileShowSet, chosenItemSet } from '../context/actions.js';

/* Components ---------------------------*/
import Button from '../../common/Forms/Controls/Button.jsx';

const Navigator = () => {

    const { state, dispatch } = useContext(Context);
    
    const items = state.items;
    const chosenItem = state.chosenItem;
    const showProfile = state.showProfile;
    
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
                showProfile &&
                <div className='row'>
                    <div className='column column1'>
                        {
                            prevItem &&
                            <>
                                <FontAwesomeIcon icon={ faCaretLeft } />
                                <Button onClick={ () => { dispatch(chosenItemSet(prevItem))  } }>THIS WAY</Button>
                            </>
                        }
                    </div>
                    <div className='column column2'>
                        <Button onClick={ () => { dispatch(profileShowSet(false)) } }>HOME SWEET HOME</Button>
                    </div>
                    <div className='column column3'>
                        {
                            nextItem &&
                            <>
                                <Button onClick={ () => { dispatch(chosenItemSet(nextItem))  } }>THAT WAY</Button>
                                <FontAwesomeIcon icon={ faCaretRight } />
                            </>
                        }
                    </div>
                </div>
            }
        </NavigatorStyled>
    );
}

export default Navigator;

const NavigatorStyled = styled.div`

    background-color: #E2E3E5;
    padding: 0px 10px;
    text-align: center;
    height: 60px;

    margin: 0 0 20px;

    .row {
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        max-width: 540px;
        margin: auto;

        .column1 { flex: 1; }
        .column2 { flex: 2; }
        .column3 { flex: 1; }

        .column2 {
            border: solid 1px #EE984B;
            border-top: none;
            border-bottom: none;
        }
    }

    Button {
        background-color: transparent;
        border: none;
        outline: none;
        color: #52837D;
        padding: 0px;
        margin: 0px 10px;

        &:hover, &:active, &:focus {
            background-color: transparent;
            border: none;
            outline: none;
        }
    }

    svg {
        font-size: 26px;
        color: #EE984B;
        position: relative;
        top: 4px;
    }


    
`;