'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
const sequelize_1 = require("sequelize");
const up = async (queryInterface) => {
    await queryInterface.addColumn('users', 'lang', {
        type: sequelize_1.DataTypes.ENUM('rus', 'eng', 'uzb'),
        allowNull: true,
    });
};
exports.up = up;
const down = async (queryInterface) => {
    await queryInterface.removeColumn('users', 'lang');
};
exports.down = down;
