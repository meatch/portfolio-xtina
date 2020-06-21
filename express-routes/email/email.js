const express = require('express');
const router = express.Router();
const EmailAPI = require('./emailApi.js');

/*---------------------------
| Route Handler for Emailing.
---------------------------*/
router.post('/send', (req, res) => {
    const response = {
        errors: false,
        message: 'Email Sent',
        postedData: req.body,
    }

    /*---------------------------
    | Compose Message
    ---------------------------*/
    const name = req.body.name;
    const replyTo = req.body.email;
    const message = req.body.message;

    const messageBody = `
        <p>Name: ${name}</p>
        <p>Email: <a href='mailto:${replyTo}'>${replyTo}</a></p>
        <div>${message}</div>
    `;

    const email = EmailAPI(replyTo, messageBody);
    email.send();

    /*---------------------------
    | Return Response
    ---------------------------*/
    res.json(response);

});

module.exports = router;