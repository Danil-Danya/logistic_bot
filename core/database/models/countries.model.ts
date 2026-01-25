import { Model, DataTypes } from 'sequelize';
import type { Optional } from "sequelize";

import sequelize from '../../../plugins/sequelize';

interface CountriesAttributes {
    id: string;

    name_rus: string;
    name_uzb: string;
    name_eng: string;
}

interface CountriesCreationAttributes extends Optional<
    CountriesAttributes, 'id'
> {}

class Countries extends Model<CountriesAttributes, CountriesCreationAttributes> implements CountriesAttributes {
    public id!: string;

    public name_rus!: string;
    public name_eng!: string;
    public name_uzb!: string;
}

Countries.init({
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
}, {
    sequelize,
    tableName: 'countries',
    modelName: 'Countries',
    timestamps: false,
})

export default Countries;