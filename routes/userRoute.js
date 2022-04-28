const router = require('express').Router();
const {
    registerUser,
    getAllUser,
    findUser,
    updateUser,
} = require('../controllers/user.controller');
const {
    authenticateKey,
    userValidationRules,
    registerValidation,
    updateUserRules,
} = require('../middlewares/auth');

/** Route Update User*/
router.post(
    '/register',
    authenticateKey,
    userValidationRules(),
    registerValidation,
    registerUser
);

router.get('/find/:id', authenticateKey, findUser);
router.get('/list', authenticateKey, getAllUser);

router.patch(
    '/',
    authenticateKey,
    updateUserRules(),
    registerValidation,
    updateUser
);

module.exports = router;
