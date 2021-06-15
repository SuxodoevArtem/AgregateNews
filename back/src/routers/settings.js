const router = require('express-promise-router')();
const { settings } = require('../controllers/index');

router.route('/settigs/getsources').get(settings.GetSourse);
router.route('/settigs/deletesourse').post(settings.DeleteSourse);
router.route('/settigs/addsourse').post(settings.AddSourse);

module.exports = router;