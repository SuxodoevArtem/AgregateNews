const router = require('express-promise-router')();
const { api } = require('../controllers/index');

router.route('/api/news/:id').get(api.APIgetAll);
router.route('/api/news/:id?:date').get(api.APIgetDate);
router.route('/api/news/createkey').post(api.APIcreateKey);

module.exports = router;