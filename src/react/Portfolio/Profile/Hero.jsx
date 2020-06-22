import React, { useContext } from 'react';
import styled from 'styled-components';

/* Context ---------------------------*/
import Context from '../context/store.js';
import ButtonLink from '../../common/ButtonLink.jsx';

/* Scripts ---------------------------*/
import { useMediaQuery } from '../../common/responsive.js';

const Hero = () => {

    const queries = useMediaQuery();
    const { state, dispatch } = useContext(Context);

    const chosenItem = state.chosenItem;

    return (
        <HeroStyled className='Hero' queries={ queries }>
            <div className="column column1">
                <img src={ chosenItem.image } alt={ `Portfolio: ${chosenItem.title}` } />
            </div>
            <div className="column column2">
                <h2>{ chosenItem.title }</h2>

                <div className='description'>
                    <b>Description:</b> <span dangerouslySetInnerHTML={{ __html: chosenItem.description }} />
                </div>

                <div className='tools'>
                    <b>Tools:</b> <span dangerouslySetInnerHTML={{ __html: chosenItem.tools }} />
                </div>

                <ButtonLink
                    href={ chosenItem.link }
                    target='_blank'
                >Launch Website</ButtonLink>
            </div>
        </HeroStyled>
    );
}

export default Hero;

const HeroStyled = styled.div`
    ${({queries}) => (!queries.isSmall) && `display: flex;` }
    margin: 20px 0px;

    .column { flex: 1; }

    .column1 {
        img  {
            max-width: 100%;
            border: solid 1px #333;
        }
    }

    .column2 {
        text-align: left;
        padding: 0px 20px;

        h2 {
            font-size: 35px;
            margin: 0px 0px 20px;
        }

    }

    .description, .tools
    {
        margin: 10px 0px;
    }
`;