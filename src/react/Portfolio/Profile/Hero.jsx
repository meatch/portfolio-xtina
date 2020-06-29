import React, { useContext } from 'react';
import styled from 'styled-components';
import _ from 'lodash';

/* Context ---------------------------*/
import Context from '../context/store.js';
// import ButtonLink from '../../common/ButtonLink.jsx';

/* Scripts ---------------------------*/
import { useMediaQuery } from '../../common/responsive.js';

/* Components ---------------------------*/
import Publications from './Publications.jsx';

const Hero = () => {

    const queries = useMediaQuery();
    const { state } = useContext(Context);

    const chosenItem = state.chosenItem;

    if (_.isEmpty(chosenItem)) { return 'Loading...'; }

    return (
        <HeroStyled className='Hero' queries={ queries }>
            <header>
                <h2>{ chosenItem.title }</h2>
                <h3>{ chosenItem.subtitle }</h3>
            </header>
            <div className="row">
                <div className="column column1">
                    <img src={ chosenItem.images.hero } alt={ `Portfolio: ${chosenItem.title}` } />
                </div>
                <div className="column column2">
                    <p className='description'>
                        <b>Showcased:</b> <span dangerouslySetInnerHTML={{ __html: chosenItem.showcased }} />
                    </p>
                    
                    <Publications chosenItem={ chosenItem } />

                    <p className='media'>
                        <b>Media:</b> <span dangerouslySetInnerHTML={{ __html: chosenItem.media }} />
                    </p>
                    <p className='development'>
                        <b>Development:</b> <span dangerouslySetInnerHTML={{ __html: chosenItem.development }} />
                    </p>
                    <p className='highlights'>
                        <b>Highlights:</b> <span dangerouslySetInnerHTML={{ __html: chosenItem.highlights }} />
                    </p>

                    {
                        chosenItem.images.column_footer.map((img, idx) => {
                            return <img key={ idx } src={ img } alt={ `${chosenItem.title} Supplement` } />;
                        })
                    }


                </div>
            </div>
        </HeroStyled>
    );
}

export default Hero;

const HeroStyled = styled.div`

    header {
        text-align: center;
        margin-bottom: 20px;

        h2 { font-size: 50px; margin: 0px; line-height: 120%; color: #EF984B; }
        h3 { font-size: 30px; margin: 0px; line-height: 120%; font-weight: normal; }
    }

    &.Hero {
        margin: 20px 0px;

        .row {
            ${({queries}) => (!queries.isSmall) && `display: flex;` }
            .column1 { flex: 2; }

            .column1 {
                img  {
                    max-width: 100%;
                    border: solid 1px white;
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
        }

        p {
            margin: 20px 0px;
            line-height: 150%;
        }
        .media { margin-bottom: 0; }
        .development { margin-top: 0; }
    }
`;