import React, { useReducer, useEffect } from 'react';

// Context
import Context from './context/store.js';
import reducers from './context/reducers.js';
import { itemsSet, chosenItemSet } from './context/actions.js';

/* Scripts ---------------------------*/
import { callAxios } from '../../common/axios.js';

/* Components ---------------------------*/
import PageTemplate from '../PageTemplate.jsx';
import Gallery from './Content.jsx';

const Portfolio = () => {

    const defaultState = {
        items: [],
        chosenItem: {},
        showProfile: false,
    };

    const [ state, dispatch ] = useReducer(reducers, defaultState);

    useEffect(() => {
        callAxios('/portfolio', (response) => {
            dispatch(itemsSet(response));
            dispatch(chosenItemSet(response[0]));
        });
    }, []);

    return (
        <Context.Provider value={ { state, dispatch } }>
            <div className='Portfolio'>
                <PageTemplate title='Work'>
                    <Gallery />
                </PageTemplate>
            </div>
        </Context.Provider>
    );
}

export default Portfolio;