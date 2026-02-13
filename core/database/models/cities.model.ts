import { Model, DataTypes } from 'sequelize';
import type { Optional } from "sequelize";

import sequelize from '../../../plugins/sequelize';

interface CitiesAttributes {
    id: string;

    name_rus: string;
    name_uzb: string;
    name_eng: string;

    keywords: string[];

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

    public keywords!: string[];

    public country_id!: string;
}

Cities.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
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

export default Cities;