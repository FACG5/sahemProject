const express = require('express');
const home = require('./home');
const signup = require('./signup');
const login = require('./login');
const createProposal = require('./createProposal');
const isLogedIn = require('./../middleware/authentication');

const router = express.Router();

router.get('/', home.get);

router.get('/signup', signup.get);
router.post('/signup', signup.post);

router.get('/login', login.get);
router.post('/login', login.post);

router.get('/createproposal', isLogedIn, createProposal.get);
router.post('/createproposal', isLogedIn, createProposal.post);

module.exports = router;
