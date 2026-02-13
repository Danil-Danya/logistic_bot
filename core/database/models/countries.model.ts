import { Model, DataTypes } from 'sequelize';
import type { Optional } from "sequelize";

import sequelize from '../../../plugins/sequelize';

interface CountriesAttributes {
    id: string;

    name_rus: string;
    name_uzb: string;
    name_eng: string;

    keywords: string[];
}

interface CountriesCreationAttributes extends Optional<
    CountriesAttributes, 'id'
> {}

class Countries extends Model<CountriesAttributes, CountriesCreationAttributes> implements CountriesAttributes {
    public id!: string;

    public name_rus!: string;
    public name_eng!: string;
    public name_uzb!: string;

    public keywords!: string[];
}

Countries.init({
    id: {
        type: DataTypes.UUID,
        //defaultValue: DataTypes.UUIDV4,
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

    keywords: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: true
    }
}, {
    sequelize,
    tableName: 'countries',
    modelName: 'Countries',
    timestamps: false,
    hooks: {
        beforeSave: (model: any) => {
            if (Array.isArray(model.keywords)) {
                model.keywords = model.keywords
                    .filter((x: any) => typeof x === "string")
                    .map((x: string) => x.trim())
                    .filter((x: string) => x.length > 0)
                    .map((x: string) => x.toLowerCase());
            }
        }
    }
})

export default Countries;