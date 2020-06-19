import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

/* Scripts ---------------------------*/
// TODO Currently using static data, no need to use a jackhammer at the moment.
// import { callAxios } from '../../common/axios.js';
import { response } from './portfolioData.js';

/* Components ---------------------------*/
import GalleryFilters from './GalleryFilters.jsx';
import GalleryPiece from './GalleryPiece.jsx';

const Gallery = () => {

    const [pieces, piecesSet] = useState([]);
    const [categories, categoriesSet] = useState([]);
    const [chosenCategory, chosenCategorySet] = useState();

    useEffect(() => {
        // callAxios('/portfolio', (response) => {
        //     chosenCategorySet(response.categories[0]);
        //     piecesSet(response.pieces);
        //     categoriesSet(response.categories);
        // });

        chosenCategorySet(response.categories[0]);
        piecesSet(response.pieces);
        categoriesSet(response.categories);


    }, []);

    return (
        <GalleryStyled className='Gallery'>

            <GalleryFilters 
                categories={ categories } 
                chosenCategory={ chosenCategory }
                chosenCategorySet={ chosenCategorySet }
            />

            <div className="GalleryPieces">
                {
                    pieces.filter((item) => {
                            return (chosenCategory.id === 0 ||  item.categories.includes(chosenCategory.id));
                        })
                        .map((item) => {
                            return <GalleryPiece key={ item.id } item={ item } />;
                        })
                }
            </div>
        </GalleryStyled>
    );
}

export default Gallery;

const GalleryStyled = styled.div`
    .GalleryPieces {
        display: flex;
        flex-wrap: wrap;

        margin: 20px 0px 0px;
    }
`;