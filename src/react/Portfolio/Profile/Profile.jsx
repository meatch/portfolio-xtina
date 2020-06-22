import React, { useContext } from 'react';
import styled from 'styled-components';

/* Context ---------------------------*/
import Context from '../context/store.js';

/* Components ---------------------------*/
import Navigator from './Navigator.jsx';
import Hero from './Hero.jsx';

const GalleryProfile = () => {

    const { state } = useContext(Context);

    if (!state.showProfile) { return <div>Loading...</div>; }

    return (
        <GalleryProfileStyled className='GalleryProfile'>
            <Navigator />
            <Hero />
        </GalleryProfileStyled>
    );
}

export default GalleryProfile;

const GalleryProfileStyled = styled.div`
    
`;