const router = require('express').Router();
const {
    signup,
    login,
    findAllUsers,
} = require('../../controllers/userController')

router.route('/').get(findAllUsers)

router.route('/signup').post(signup)
router.route('/login').post(login)

module.exports = router;