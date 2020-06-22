import React, { useContext } from 'react';
import styled, { css } from 'styled-components';

/* Context ---------------------------*/
import Context from './context/store.js';

/* Components ---------------------------*/
import Items from './Items/Items.jsx';
import Profile from './Profile/Profile.jsx';

const Gallery = () => {

    const { state } = useContext(Context);

    return (
        <GalleryStyled className='Gallery' showProfile={ state.showProfile }>
            <div className="slider">
                <div className="column column1">
                    <Items />
                </div>
                <div className="column column2">
                    <Profile />
                </div>
            </div>
        </GalleryStyled>
    );
}

export default Gallery;

const GalleryStyled = styled.div`

    overflow: hidden;
    margin: 20px 0px 0px;


    .slider {
        width: 200%;
        display: flex;

        transition: .5s all;
        position: relative;
        left: 0;

        ${({showProfile}) => {
            if (showProfile) { 
                return css`left: -100%;`;
            } 
        }}
    }

    .column { flex: 1; }


`;