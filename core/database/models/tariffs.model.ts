import { Model, DataTypes } from 'sequelize';
import type { Optional } from "sequelize";

import sequelize from '../../../plugins/sequelize';

interface TariffAttributes {
    id: string;
    name: string;
    description: string;
    price: number;
    period: string;

    created_at: Date;
    updated_at: Date;
}

interface TariffCreationAttributes extends Optional<
    TariffAttributes, 'id' | 'created_at' | 'updated_at'
> {}

class Tariff extends Model<
    TariffAttributes, 
    TariffCreationAttributes
> implements TariffAttributes {
    public id!: string;
    public name!: string;
    public description!: string;
    public price!: number;
    public period!: string; 

    public readonly created_at!: Date;
    public readonly updated_at!: Date;
}

Tariff.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },

    description: {
        type: DataTypes.TEXT,
        allowNull: true,
    },

    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },

    period: {
        type: DataTypes.ENUM('daily', 'weekly', 'monthly', 'yearly'),
        allowNull: false,
    },

    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },

    updated_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    }
}, {
    sequelize,  
    tableName: 'tariffs',
    modelName: 'Tariff',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    timestamps: true,
})

export default Tariff;