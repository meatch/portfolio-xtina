const express = require('express');
const router = express.Router();

const items = require('./items/items.json');

router.get('/', (req,res) => { 
    res.json(items);
    console.log('Retreived Portfolio');
});

module.exports = router;