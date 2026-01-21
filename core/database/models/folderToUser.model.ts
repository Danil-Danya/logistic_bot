import { Model, DataTypes } from 'sequelize';
import type { Optional } from "sequelize";

import sequelize from '../../../plugins/sequelize';

interface FolderToUserAttributes {
    id: string;
    folder_id: string;
    user_id: string;
}

interface FolderToUserCreationAttributes extends Optional<
    FolderToUserAttributes, 'id'
> {}

class FolderToUser extends Model<
    FolderToUserAttributes, 
    FolderToUserCreationAttributes
> implements FolderToUserAttributes {
    public id!: string;
    public folder_id!: string;
    public user_id!: string;
}

FolderToUser.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },

    folder_id: {
        type: DataTypes.UUID,
        allowNull: false,
    },

    user_id: {
        type: DataTypes.UUID,
        allowNull: false,
    },
}, {
    sequelize,
    tableName: 'folder_to_user',
    modelName: 'FolderToUser',
    timestamps: false,
});

export default FolderToUser;