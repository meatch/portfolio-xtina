import React from 'react';
import styled, { css } from 'styled-components';
import { BrowserRouter, Switch, Route } from "react-router-dom";

/* Scripts ---------------------------*/
import { useMediaQuery } from './common/responsive.js';
import { config } from '../common/config.js';

/* Components ---------------------------*/
import Nav from './Nav.jsx';
import NavSocial from './NavSocial.jsx';
import Portfolio from './Portfolio/Portfolio.jsx';
import HireMe from './HireMe/HireMe.jsx';

const App = () => {

    const queries = useMediaQuery();

    return (
        <BrowserRouter>
            <AppStyled className='App' queries={ queries }>
                <h2>
                    <div className='fullname' dangerouslySetInnerHTML={{ __html: config.header.fullname } } />
                    <div className='title' dangerouslySetInnerHTML={{ __html: config.header.title } } />
                </h2>
                <div className="wrapper">
                    <nav className='Primary'>
                        <Nav />
                        <NavSocial />
                    </nav>
                    <main>
                        <Switch>
                            <Route path='/hireme' component={ HireMe } />
                            <Route path='/' exact component={ Portfolio } />
                        </Switch>
                    </main>
                    <footer>
                        <div className='tagline' dangerouslySetInnerHTML={{ __html: config.footer.tagline } } />
                        <div className='copyright' dangerouslySetInnerHTML={{ __html: config.footer.copyright } } />
                    </footer>
                </div> 
            </AppStyled>
        </BrowserRouter>
    );
}

export default App;

const AppStyled = styled.div`
    background-image: url('/assets/img/backdrop.png');
    background-position: center top;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-color: #08232B;
    padding: 10px;
    
    & > h2 {
        text-align: center;
        text-transform: uppercase;
        color: #fff;
        margin: 0px;

        .fullname { font-size: 80px; margin-bottom: 5px; }
        .title { font-size: 40px; }

        ${ ({queries}) => { 
            if (queries.isSmall) { 
                return css`padding: 60px 0px;`;
            }
            if (queries.isMedium) { 
                return css`padding: 150px 0px;`;
            }
            if (queries.isLarge) { 
                return css`padding: 150px 0px;`;
            }
        }}
    }

    .wrapper {
        max-width: 1200px;
        width: 100%;
        margin: auto;

        nav.Primary {
            display: flex;
            justify-content: space-between;
            padding: 10px 0px;
        }
        main {
            display: block;
            background-color: #fff;
            min-height: 500px;
            border-radius: 5px;

            ${ ({queries}) => { 
                if (queries.isSmall) { 
                    return css`padding: 10px;`;
                }
                if (queries.isMedium) { 
                    return css`padding: 10px;`;
                }
                if (queries.isLarge) { 
                    return css`padding: 20px;`;
                }
            }}
        }

        footer {
            color: #658d98;
            font-size: 12px;
            text-align: center;
            padding: 100px 20px;
        }
    }
`;