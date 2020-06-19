const express = require('express');
const router = express.Router();

const services = require('./portfolioData');

router.get('/', (req,res) => { 
    res.json(services);
    console.log('Retreived Portfolio');
});

module.exports = router;