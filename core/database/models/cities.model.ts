import { Model, DataTypes } from 'sequelize';
import type { Optional } from "sequelize";

import sequelize from '../../../plugins/sequelize';

interface CitiesAttributes {
    id: string;

    name_rus: string;
    name_uzb: string;
    name_eng: string;

    country_id: string;
}

interface CitiesCreationAttributes extends Optional<
    CitiesAttributes, 'id'
> {}

class Cities extends Model<CitiesAttributes, CitiesCreationAttributes> implements CitiesAttributes {
    public id!: string;

    public name_rus!: string;
    public name_eng!: string;
    public name_uzb!: string;

    public country_id!: string;
}

Cities.init({
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true
    },

    name_rus: {
        type: DataTypes.STRING,
        allowNull: false
    },

    name_uzb: {
        type: DataTypes.STRING,
        allowNull: false
    },

    name_eng: {
        type: DataTypes.STRING,
        allowNull: false
    },

    country_id: {
        type: DataTypes.UUID,
        allowNull: false
    }
}, {
    sequelize,
    tableName: 'cities',
    modelName: 'Cities',
    timestamps: false,
})

export default Cities;