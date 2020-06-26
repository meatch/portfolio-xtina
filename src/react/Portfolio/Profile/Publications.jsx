import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faArrowDown,
} from '@fortawesome/free-solid-svg-icons';

const Publications = ({chosenItem}) => {

    const pubs = chosenItem.pdfs ? chosenItem.pdfs.split(','):[];

    // if (!pubs || pubs.length === 0) { return ''; }

    return (
        <PublicationsStyled className='Publications'>
            {
                pubs.map((pub, idx) => {
                    return (
                        <a 
                            key={ idx }
                            href={ `/assets/img/portfolio/${chosenItem.asset_folder}/pdfs/${pub}` }
                            target='_blank'
                            rel="noopener noreferrer"
                        >
                            <span className='arrow'><FontAwesomeIcon icon={ faArrowDown } /></span>{ ' ' }
                            <span className='downloadPub'>Download Publication:</span>{ ' ' }
                            <span className='pdf'>{ pub.trim() }</span>
                        </a>
                    );
                })
            } 
        </PublicationsStyled>
    );
}

export default Publications;

const PublicationsStyled = styled.div`
    a {
        display: block;
        text-decoration: none;
        margin-bottom: 5px;

        color: #333;

        .arrow {
            color: #EE984B;
        }
        .pdf {
            color: #EE984B;
        }

        &:hover {
            text-decoration: underline;

        }
    }
`;