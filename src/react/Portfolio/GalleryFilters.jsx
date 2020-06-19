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

    button {
        background-color: transparent;
        border: none;
        outline: none;

        display: inline-block;
        padding: 5px 0px;
        margin: 0px 10px;

        border-bottom: solid 5px #cee2e8;
        &.active {
            border-color: #134d5f;
        }
    }

`;