const router = require('express-promise-router')();
const { settings } = require('../controllers/index');

router.route('/settigs/getrss').get(settings.GetRSS);

module.exports = router;