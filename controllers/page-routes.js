// This page is the routes for HTML and Handlebars
const path = require('path');
const secured = require('./middleware/secured');
const router = require('express').Router();

// GET home page. static, not secured
router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});
// GET team page. static, not secured
router.get('/team', function(req, res) {
    res.sendFile(path.join(__dirname, "../public/team.html"));
});
// GET sleep recommendations. static, secured
router.get('/recommendations', secured(), function(req, res) {
    res.sendFile(path.join(__dirname, "../public/recommendations.html"));
});
// GET user profile. dynamic, secured. (pre-made)
router.get('/user', secured(), function(req, res) {
    const { _raw, _json, ...userProfile } = req.user;
    res.render('user', {
        // this line gives all the user data
        userProfile: JSON.stringify(userProfile, null, 2),
        title: 'Profile page'
    });
});
// GET questions page. dynamic, secured
router.get('/questions', secured(), function(req, res) {
    res.render('onBoard', { title: 'Questionnaire' });
});
// GET tables page. dynamic, secured
// router.get('/results', secured(), function(req, res) {
//     res.render('results', { title: 'Sleep Table' });
// });
router.get('/results', secured(), function(req, res) {
    const { _raw, _json, ...userProfile } = req.user;
    res.render('results', {
        // this line gives all the user data
        userProfile: JSON.stringify(userProfile, null, 2),
        title: 'Sleep table'
    });
});

module.exports = router;