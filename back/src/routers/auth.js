const router = require('express-promise-router')();
const { auth } = require('../controllers/index');

router.route('/auth/signup').post(auth.signUp);

module.exports = router;