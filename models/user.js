'use strict';
const { Model } = require('sequelize');
const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    User.init(
        {
            name: DataTypes.STRING,
            address: DataTypes.TEXT,
            email: { type: DataTypes.STRING, unique: true, allowNull: false },
            password: { type: DataTypes.STRING, allowNull: false },
            photos: { type: DataTypes.TEXT, allowNull: true },
            creditcard_type: {
                type: DataTypes.STRING,
                allowNull: false,
            },

            creditcard_number: {
                type: DataTypes.STRING,
                allowNull: false,
            },

            creditcard_name: {
                type: DataTypes.STRING,
                allowNull: false,
            },

            creditcard_expired: {
                type: DataTypes.STRING,
                allowNull: false,
            },

            creditcard_cvv: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {
            sequelize,
            modelName: 'User',
            hooks: {
                beforeCreate: async (user) => {
                    if (user.password) {
                        const salt = await bcrypt.genSaltSync(10);
                        user.password = bcrypt.hashSync(user.password, salt);
                    }
                },
                beforeUpdate: async (user) => {
                    if (user.password) {
                        const salt = await bcrypt.genSaltSync(10);
                        user.password = bcrypt.hashSync(user.password, salt);
                    }
                },
            },
            timestamps: true,
        }
    );

    User.prototype.validatePassword = async (password, hash) => {
        return await bcrypt.compareSync(password, hash);
    };

    return User;
};
