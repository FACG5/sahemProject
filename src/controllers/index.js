const express = require('express');
const home = require('./home');
const signup = require('./signup');
const login = require('./login');


const router = express.Router();

router.get('/', home.get);

router.get('/signup', signup.get);
router.post('/signup', signup.post);

router.get('/login', login.get);
router.post('/login', login.post);


module.exports = router;
