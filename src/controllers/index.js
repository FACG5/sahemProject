const express = require('express');
const home = require('./home');
const signup = require('./signup');
const profile = require('./profile');


const router = express.Router();

router.get('/', home.get);
router.get('/signup', signup.get);
router.post('/signup', signup.post);

router.get('/profile/:id', profile.get);


module.exports = router;
