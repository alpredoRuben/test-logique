const { User } = require('../models');
async function registerUser(req, res) {
    const {
        name,
        address,
        email,
        password,
        photos,
        creditcard_type,
        creditcard_number,
        creditcard_name,
        creditcard_expired,
        creditcard_cvv,
    } = req.body;

    try {
        const user = await User.create({
            name,
            address,
            email,
            password,
            photos: JSON.stringify(photos),
            creditcard_type,
            creditcard_number,
            creditcard_name,
            creditcard_expired,
            creditcard_cvv,
        });

        return res.status(201).json({
            message: 'Account register successfully',
            user,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            error: 'Something went wrong. Please try again later.',
        });
    }
}

async function getAllUser(req, res) {
    const { q, ob, sb, of, lt } = req.query;
    const attributes = q.split(',');

    const offset = of || 0;
    const limit = lt || 10;
    let orders;
    if (ob && sb) {
        orders = [ob, sb];
    } else {
        orders = ['id', 'desc'];
    }

    try {
        const { count, rows } = await User.findAndCountAll({
            attributes: attributes,
            order: [orders],
            offset,
            limit,
        });

        return res.status(200).json({
            count,
            rows,
        });
    } catch (error) {
        return res
            .status(500)
            .json({ error: 'Something went wrong. Please try again later.' });
    }
}

async function findUser(req, res) {
    const { id } = req.params;
    console.log(id);
    try {
        const user = await User.findByPk(id);
        user.photos = JSON.parse(user.photos);
        return res.status(200).json(user);
    } catch (error) {
        return res
            .status(500)
            .json({ error: 'Something went wrong. Please try again later.' });
    }
}

async function updateUser(req, res) {
    const {
        id,
        name,
        address,
        email,
        password,
        photos,
        creditcard_type,
        creditcard_number,
        creditcard_name,
        creditcard_expired,
        creditcard_cvv,
    } = req.body;

    try {
        const update = await User.update(
            {
                name,
                address,
                email,
                password,
                photos: JSON.stringify(photos),
                creditcard_type,
                creditcard_number,
                creditcard_name,
                creditcard_expired,
                creditcard_cvv,
            },
            {
                where: {
                    id: id,
                },
            }
        );

        return res.json({
            message: 'success',
        });
    } catch (error) {
        return res
            .status(500)
            .json({ error: 'Something went wrong. Please try again later.' });
    }
}

module.exports = {
    registerUser,
    getAllUser,
    findUser,
    updateUser,
};
