const express = require('express');
const home = require('./home');
const signup = require('./signup');
const login = require('./login');
const logout = require('./logout');
const search = require('./search');
const AdvancedSearch = require('./advancedsearch');
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
router.get('/logout', logout.get);

router.get('/proposal/:id', proposal.get);
router.post('/donation', donation.post);

router.get('/createproposal', isLogedIn, createProposal.get);
router.post('/createproposal', isLogedIn, createProposal.post);

router.get('/profile/:id', profile.get);
router.get('/search', search.get);
router.get('/advancedsearchform', AdvancedSearch.getAdvancedSearchForm);
router.get('/advancedsearchresults', AdvancedSearch.getAdvancedSearchResults);


module.exports = router;
