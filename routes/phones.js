const router = require('express').Router()
const PhoneController = require('../controllers/phoneController');
const { authentication } = require('../middlewares/authentication');

router.get('/', authentication, PhoneController.fetchPhones);
router.post('/', authentication, PhoneController.addPhone);
router.get('/search', authentication, PhoneController.search);
router.put('/update/:id', authentication, PhoneController.editPhone);
router.delete('/del/:id', authentication, PhoneController.deletePhone)

module.exports = router
