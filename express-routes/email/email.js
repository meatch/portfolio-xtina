const express = require('express');
const router = express.Router();
const emailAPI = require('./emailApi.js');

/*---------------------------
| SendGrid Emailing
---------------------------*/
// TODO: Compose the email from the form now.
const msg = {
    html: '<strong>HTML</strong> version of emails.',
};

/*---------------------------
| Route Handler for Emailing.
---------------------------*/
router.post('/send', (req, res) => {
    const response = {
        errors: false,
        message: 'Email Sent',
        postedData: req.body,
    }

    emailAPI.sendEmail(msg);

    console.log('Post Sent Email');
    res.json(response);
});

module.exports = router;