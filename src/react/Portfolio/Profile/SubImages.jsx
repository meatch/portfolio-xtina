import React, { useContext } from 'react';
import styled from 'styled-components';
import _ from 'lodash';


/* Context ---------------------------*/
import Context from '../context/store.js';

const SubImages = () => {

    const { state } = useContext(Context);
    const chosenItem = state.chosenItem;
    if (_.isEmpty(chosenItem) || chosenItem.images.sub.length === 0) { return 'Loading...'; }

    return (
        <SubImagesStyled className='SubImages'>
            {
                chosenItem.images.sub.map((sub_image, idx) => {
                    return <img key={ idx } src={ sub_image } alt={`${chosenItem.title} Example`} />;
                })
            } 
        </SubImagesStyled>
    );
}

export default SubImages;

const SubImagesStyled = styled.div`
    img {
        display: block;
        max-width: 100%;
        margin-bottom: 20px;

    }
`;