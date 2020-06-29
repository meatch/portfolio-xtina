/*===================================
|| 
|| NodeJS Server with Express Framework
|| 
===================================*/
/*---------------------------
| Environment Vars
---------------------------*/
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, './.env') });

/*---------------------------
| Config
---------------------------*/
const NODE_PORT = process.env.NODE_PORT || 5001; // fallback to 5001

/*---------------------------
| Resources
---------------------------*/
// require('dotenv').config({ path: './.env.local' });
const express = require('express');
const bodyParser = require("body-parser"); //Only way to do POST requests

/*---------------------------
| Initiaize Instance of Express as app
---------------------------*/
const app = express();

/*---------------------------
| Set Up BodyParser for Post Requests
---------------------------*/
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/*---------------------------
| Serve the static files from the React app
---------------------------*/
app.use(express.static(path.join(__dirname, 'build')));

/*---------------------------
| !IMPORTANT :: Should not be done in Production
| Bypassing CORS so Node Express can be on port 5000 and react can be on 3000
---------------------------*/

console.log('process.env.NODE_ENV', process.env.NODE_ENV);

if (process.env.NODE_ENV === 'local') {
    app.use((request, response, next) => {
        response.header("Access-Control-Allow-Origin", "*");
        response.header("Access-Control-Allow-Headers", "Content-Type");
        next();
    });
}

/*---------------------------
| Route Collections
---------------------------*/
const routes = require('./express-routes/index.js');
app.use('/api/portfolio', routes.portfolio);
app.use('/api/email', routes.email);

// Catchall for requests that do not match our routing
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(NODE_PORT, () => { 
    console.log('Server is up and listening on port:' + NODE_PORT );  
});