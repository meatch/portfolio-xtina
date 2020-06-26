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
                <div className="wrapper">
                    <header className='masthead'>
                        <div className="inset">
                            <img className='LightBulb' src="/assets/img/bulbs/bulb1-cheery.svg" alt="Light Bulb"/>
                            <h2>
                                <div className='fullname' dangerouslySetInnerHTML={{ __html: config.header.fullname } } />
                                <div className='title' dangerouslySetInnerHTML={{ __html: config.header.title } } />
                            </h2>
                            <nav className='Primary'>
                                <Nav />
                                <NavSocial 
                                    size={ queries.isSmall ? 25 : 35 }
                                />
                            </nav>
                        </div>
                    </header>
                    <main>
                        <Switch>
                            <Route path='/hireme' component={ HireMe } />
                            <Route path='/' exact component={ Portfolio } />
                        </Switch>
                    </main>
                    <footer className='closing'>
                        <div className="inset">
                            <div className='tagline' dangerouslySetInnerHTML={{ __html: config.footer.tagline } } />
                            <div className='copyright' dangerouslySetInnerHTML={{ __html: config.footer.copyright } } />
                        </div>
                    </footer>
                </div> 
            </AppStyled>
        </BrowserRouter>
    );
}

export default App;

const AppStyled = styled.div`
    /* background-image: url('/assets/img/backdrop.png'); */
    /* background-position: center top;
    background-attachment: fixed;
    background-repeat: no-repeat; */
    background-color: #dfdfdf;
    /* padding: 10px; */

    .wrapper {
        width: 100%;

        .inset {
            max-width: 1200px;
            margin: auto;
            width: 100%;
            padding: 1px 10px;
        }

        header.masthead {
            background-color: #fff;

            img.LightBulb {
                display: block;
                margin: 50px auto 0px;
                width: 150px;
                height: auto;
            }


            .inset > h2 {
                text-align: center;
                text-transform: uppercase;
                color: #55847E;
                margin: 0px;

                .fullname { font-size: 50px; margin-bottom: 5px; }
                .title { font-size: 20px; color: #153E5A; }

                ${ ({queries}) => { 
                    if (queries.isSmall) { 
                        return css`padding: 0px;`;
                    }
                    if (queries.isMedium) { 
                        return css`padding: 0px;`;
                    }
                    if (queries.isLarge) { 
                        return css`padding: 0px;`;
                    }
                }}
            }

        }

        nav.Primary {
            display: flex;
            justify-content: space-between;
            align-items:flex-end;
            padding: 10px 0px;

            margin-top: 50px;
        }
        main {
            display: block;
            background-color: #EBEBEB;
            min-height: 500px;
            border-radius: 5px;
        }

        footer.closing {
            background-color: #fff;
            color: #658d98;
            font-size: 12px;
            text-align: center;
            padding: 100px 20px;
        }
    }
`;