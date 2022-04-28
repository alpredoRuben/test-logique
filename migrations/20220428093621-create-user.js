'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Users', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            name: {
                type: Sequelize.STRING,
            },
            address: {
                type: Sequelize.TEXT,
                defaultValue: null,
                allowNull: true,
            },
            email: {
                type: Sequelize.STRING,
                unique: true,
                allowNull: false,
            },
            password: { type: Sequelize.STRING, allowNull: false },
            photos: {
                type: Sequelize.TEXT,
                defaultValue: null,
                allowNull: true,
            },
            creditcard_type: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            creditcard_number: {
                type: Sequelize.STRING,
                allowNull: false,
            },

            creditcard_name: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            creditcard_expired: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            creditcard_cvv: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('Users');
    },
};
