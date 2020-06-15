const portfolio = require('./portfolio/portfolio.js');
const email = require('./email/email.js');

const routes = {
    portfolio: portfolio,
    email: email,
}

module.exports = routes;