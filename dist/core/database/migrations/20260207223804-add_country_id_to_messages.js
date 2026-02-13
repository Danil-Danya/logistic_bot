'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
const sequelize_1 = require("sequelize");
const up = async (queryInterface) => {
    await queryInterface.addColumn('cities', 'keywords', {
        type: sequelize_1.DataTypes.ARRAY(sequelize_1.DataTypes.STRING),
        allowNull: true,
    });
    await queryInterface.addColumn('countries', 'keywords', {
        type: sequelize_1.DataTypes.ARRAY(sequelize_1.DataTypes.STRING),
        allowNull: true,
    });
};
exports.up = up;
const down = async (queryInterface) => {
    await queryInterface.removeColumn('cities', 'keywords');
    await queryInterface.removeColumn('countries', 'keywords');
};
exports.down = down;
