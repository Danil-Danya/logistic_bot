import { Model, DataTypes } from 'sequelize';
import type { Optional } from "sequelize";

import sequelize from '../../../plugins/sequelize';

interface RolesAttributes {
    id: string;
    name: string;
    description: string;

    created_at: Date;
    updated_at: Date;
}

interface RolesCreationAttributes extends Optional<
    RolesAttributes, 'id' | 'description' | 'created_at' | 'updated_at'
> {}

class Role extends Model<
    RolesAttributes, 
    RolesCreationAttributes
> implements RolesAttributes {
    public id!: string;
    public name!: string;
    public description!: string;

    public readonly created_at!: Date;
    public readonly updated_at!: Date;
}

Role.init({
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
    tableName: 'roles',
    modelName: 'Role',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    timestamps: true,
})

export default Role;