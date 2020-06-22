import React, { useContext } from 'react';
import styled from 'styled-components';

/* Context ---------------------------*/
import Context from '../context/store.js';

/* Components ---------------------------*/
import Item from './Item.jsx';

const Items = () => {

    const { state, dispatch } = useContext(Context);

    return (
        <ItemsStyled className='Items'>
            {
                state.items.map((item) => {
                    return <Item key={ item.id } item={ item } />;
                })
            }
        </ItemsStyled>
    );
}

export default Items;

const ItemsStyled = styled.div`
    display: flex;
    flex-wrap: wrap;
`;