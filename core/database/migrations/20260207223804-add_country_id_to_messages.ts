'use strict';

import { QueryInterface, DataTypes } from 'sequelize';

const up = async (queryInterface: QueryInterface) => {
    await queryInterface.addColumn('cities', 'keywords', {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: true,
    });

    await queryInterface.addColumn('countries', 'keywords', {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: true,
    });
}

const down = async (queryInterface: QueryInterface) => {
    await queryInterface.removeColumn('cities', 'keywords');
    await queryInterface.removeColumn('countries', 'keywords');
}

export {
    up,
    down
}