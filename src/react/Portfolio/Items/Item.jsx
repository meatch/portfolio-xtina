import React, { useContext, useState } from 'react';
import styled from 'styled-components';

/* Context ---------------------------*/
import Context from '../context/store.js';
import { chosenItemSet, profileShowSet } from '../context/actions.js';

/* Scripts ---------------------------*/
import { useMediaQuery } from '../../common/responsive.js';

const Item = ({item}) => {

    const [isOver, isOverSet] = useState(false);

    const queries = useMediaQuery();
    const { dispatch } = useContext(Context);

    const imagePath = `/assets/img/portfolio/${item.asset_folder}/nav.jpg`;

    const handleOver = () => {
        isOverSet(true);
    }

    const handleOut = () => {
        isOverSet(false);
    }

    return (
        <ItemStyled
            className='Item' 
            queries={ queries }
            isOver={ isOver }
            onClick={ () => { 
                dispatch(chosenItemSet(item));
                dispatch(profileShowSet(true)); 
            }}
            onMouseOver={ handleOver }
            onMouseOut={ handleOut }
        >
            <img src={ imagePath } alt={ `Portfolio: ${item.title}` } />
            <div className='overlay'>
                <div className='content'>
                    {
                        !isOver ?
                        <span className='title'>&quot;{ `${item.title}` }&quot;</span> : 
                        <img className='LightBulb' src="/assets/img/bulbs/bulb2-smiley.svg" alt="Light Bulb"/>
                    }
                </div>
            </div>
        </ItemStyled>
    );
}

export default Item;

const ItemStyled = styled.div`
    border: solid 1px #b5b5b5;
    position: relative;

    width: 100%;
    margin-bottom: 10px;

    img {
        max-width: 100%;
        display: block;
    }

    .overlay {
        position: absolute;
        left: 0px; right: 0px; top: 0px; bottom: 0px;
        

        display: flex;
        justify-content: center;
        align-items: center;
        
        text-align: center;
        
        padding: 10px;

        transition: background-color .5s;

        background-color: ${ ({isOver}) => (isOver) ? `rgba(255,255,255, .8)` : `rgba(0,0,0,.6)` };
    }

    .content {
        .title {
            ${ ({queries}) => (queries.isSmall) && `font-size:30px` };
            ${ ({queries}) => (queries.isMedium) && `font-size:60px` };
            ${ ({queries}) => (queries.isLarge) && `font-size:80px` };
            color: white;
            font-family: 'Oswald', sans-serif;
        }

        img {
            width: 75px;
            height: 75px;
        }
    }

    &:hover {
        .title { opacity: 1; }
    }
`;