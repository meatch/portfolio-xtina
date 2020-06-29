import React, { useContext } from 'react';
import styled from 'styled-components';

/* Context ---------------------------*/
import Context from '../context/store.js';

/* Components ---------------------------*/
import Hero from './Hero.jsx';
import SubImages from './SubImages.jsx';

const GalleryProfile = () => {

    const { state } = useContext(Context);

    if (!state.showProfile) { return <div>Loading...</div>; }

    return (
        <GalleryProfileStyled className='GalleryProfile'>
            <Hero />
            <SubImages />
        </GalleryProfileStyled>
    );
}

export default GalleryProfile;

const GalleryProfileStyled = styled.div`
    padding-bottom: 100px;
`;