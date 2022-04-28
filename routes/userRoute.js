const router = require('express').Router();
const {
    registerUser,
    getAllUser,
    findUser,
} = require('../controllers/user.controller');
const {
    authenticateKey,
    userValidationRules,
    registerValidation,
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

module.exports = router;
