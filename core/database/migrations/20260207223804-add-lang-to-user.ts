'use strict';

import { QueryInterface, DataTypes } from 'sequelize';

const up = async (queryInterface: QueryInterface) => {
    await queryInterface.addColumn('users', 'lang', {
        type: DataTypes.ENUM('rus', 'eng', 'uzb'),
        allowNull: true,
    });
}

const down = async (queryInterface: QueryInterface) => {
    await queryInterface.removeColumn('users', 'lang');
}

export {
    up,
    down
}