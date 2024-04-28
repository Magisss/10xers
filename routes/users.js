const router = require('express').Router()
const UserController = require('../controllers/userController');
const { authentication } = require('../middlewares/authentication');

router.post('/register', UserController.register);
router.post('/login', UserController.login);
router.put('/acc/:id', authentication, UserController.editProfile);
router.delete('/acc/:id', authentication, UserController.deleteUser)

module.exports = router