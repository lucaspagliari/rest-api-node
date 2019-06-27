const express = require('express');

const User = require('../models/User');

const router = express.Router();

router.post('/register', async (req, res) => {
    console.log(req.body);
    
    try {
        const user = await User.create(req.body);

        return res.send({ user })
    } catch (error) {
        return res.status(400).send({ 'error': error })
    }
});

// todas rotas = auth/register
module.exports = app => app.use('/auth', router);