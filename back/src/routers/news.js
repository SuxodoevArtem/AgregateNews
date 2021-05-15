const router = require('express-promise-router')();
const { news } = require('../controllers/index');

router.route('/news').get(news.getAll);

module.exports = router;

