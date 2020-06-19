import React from 'react';
import styled from 'styled-components';
import classnames from 'classnames';

const GalleryFilters = ({categories, chosenCategory, chosenCategorySet}) => {

    if (categories.length === 0) { return 'Loading...'; }

    return (
        <GalleryFiltersStyled className='GalleryFilters'>
            {
                categories.map((cat, idx) => {
                    const theButtonClassName = classnames({
                        'FilterButton': true,
                        'active': cat.id === chosenCategory.id,
                    });

                    return (
                        <button
                            className={ theButtonClassName }
                            key={ idx }
                            onClick={ () => { chosenCategorySet(cat) } }
                        >
                            { cat.title }
                        </button>)
                })
            }
        </GalleryFiltersStyled>
    );
}

export default GalleryFilters;

const GalleryFiltersStyled = styled.div`
    text-align: center;
    margin: 30px 0px;
`;