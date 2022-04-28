const jwt = require('jsonwebtoken');
const { body, validationResult } = require('express-validator');

const authenticateKey = (req, res, next) => {
    const header = req.headers['key'];
    console.log('HEADERS', header);

    if (!header) {
        return res.status(400).json({
            error: 'Api Key is empty',
        });
    }

    if (header != 'HiJhvL$T27@1u^%u86g') {
        return res.status(403).json({
            error: 'API key is missing',
        });
    }
    next();
};

const userValidationRules = () => {
    return [
        body('email').notEmpty().isEmail(),
        body('name').notEmpty(),
        body('password').notEmpty(),
        body('address').notEmpty(),
        body('photos').notEmpty(),
        body('creditcard_number').notEmpty(),
        body('creditcard_name').notEmpty(),
        body('creditcard_expired').notEmpty(),
        body('creditcard_cvv').notEmpty(),
    ];
};

const registerValidation = (req, res, next) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        return next();
    }
    const extractedErrors = [];
    errors.array().map((err) => extractedErrors.push({ [err.param]: err.msg }));

    return res.status(422).json({
        errors: extractedErrors,
    });
};

module.exports = { authenticateKey, registerValidation, userValidationRules };
