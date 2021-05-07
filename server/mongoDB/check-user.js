const express = require('express');
const router = express.Router();
const Joi = require('@hapi/joi');
const validateRequest = require('./validateRequest');
const db = require('./database');
const bcrypt = require('bcrypt');

router.post('/authenticate', authenticateSchema, authenticate);

module.exports = router;

function authenticateSchema(req, res, next) {
    const schema = Joi.object({
        username: Joi.string().required(),
        password: Joi.string().required()
    });
    validateRequest(req, next, schema);
}


async function authenticate(req, res, next) {
    const { username, password } = req.body;
    const user = await db.User.findOne({ username });
    if (!user || !bcrypt.compareSync(password, user.passwordHash)) {
        res.status('401');
        res.json({'status': 'failure', 'data':'Username or password is incorrect'});
    } else {
        res.status('200');
        res.json({'status': 'success', 'data':'Logged in successfully'});
    }   
}
