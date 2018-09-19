const express = require('express');
const home = require('./home');
const signup = require('./signup');
const login = require('./login');
const proposal = require('./proposal');
const donation = require('./donation');
const createProposal = require('./createProposal');
const isLogedIn = require('./../middleware/authentication');
const profile = require('./profile');

const router = express.Router();

router.get('/', home.get);

router.get('/signup', signup.get);
router.post('/signup', signup.post);

router.get('/login', login.get);
router.post('/login', login.post);

router.get('/proposal/:id', proposal.get);
router.post('/donation', donation.post);

router.get('/createproposal', isLogedIn, createProposal.get);
router.post('/createproposal', isLogedIn, createProposal.post);

router.get('/profile/:id', profile.get);

module.exports = router;
