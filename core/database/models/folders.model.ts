import { Model, DataTypes } from 'sequelize';
import type { Optional } from "sequelize";

import sequelize from '../../../plugins/sequelize';

interface FolderAttributes {
    id: string;
    name: string;
    link: string;

    created_at: Date;
    updated_at: Date;
}

interface FolderCreationAttributes extends Optional<
    FolderAttributes, 'id' | 'created_at' | 'updated_at'
> {}

class Folder extends Model<FolderAttributes, FolderCreationAttributes> implements FolderAttributes {
    public id!: string;
    public name!: string;
    public link!: string;       

    public readonly created_at!: Date;
    public readonly updated_at!: Date;
}

Folder.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    link: {
        type: DataTypes.STRING,
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
    tableName: 'folders',
    modelName: 'Folder',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    timestamps: true,
})

export default Folder;