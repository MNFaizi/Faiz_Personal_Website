const router = require('express').Router()
const { createUser, loginUser, changePassword } = require('../controllers/user.controllers');
const { authentication } = require('../middlewares/auth');

router.post('/register', createUser);
router.post('/login', loginUser);
router.put('/update_password', authentication, changePassword );

module.exports = router
