import React, { useContext } from 'react';
import styled, { css } from 'styled-components';

/* Context ---------------------------*/
import Context from '../context/store.js';
import { chosenItemSet, profileShowSet } from '../context/actions.js';

/* Scripts ---------------------------*/
import { useMediaQuery } from '../../common/responsive.js';

const Item = ({item}) => {

    const queries = useMediaQuery();
    const { state, dispatch } = useContext(Context);

    return (
        <ItemStyled
            className='Item' 
            queries={ queries }
            onClick={ () => { 
                dispatch(chosenItemSet(item)) 
                dispatch(profileShowSet(true)) 
            }}
        >
            <img src={ item.image } alt={ `Portfolio: ${item.title}` } />
            <div className='title'><span>{ item.title }</span></div>
        </ItemStyled>
    );
}

export default Item;

const ItemStyled = styled.div`
    border: solid 1px #b5b5b5;
    position: relative;

    ${ ({queries}) => { 
        if (queries.isSmall) { 
            return css`width: 100%; margin-bottom: 10px;`; 
        }
        if (queries.isMedium) { 
            return css`width: 50%;`; 
        }
        if (queries.isLarge) { 
            return css`width: 33.3333333%;`; 
        }
    }}

    img {
        max-width: 100%;
        display: block;
    }

    .title {
        position: absolute;
        left: 0px; right: 0px; top: 0px; bottom: 0px; 
        background-color: rgba(8, 35, 43, 0.87);
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 10px;

        opacity: 0;
        transition: opacity .5s;
    }

    &:hover {
        .title { opacity: 1; }
    }
`;