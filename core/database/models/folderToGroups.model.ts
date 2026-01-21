import { Model, DataTypes } from 'sequelize';
import type { Optional } from "sequelize";

import sequelize from '../../../plugins/sequelize';

interface FolderToGroupsAttributes {
    id: string;
    folder_id: string;
    group_id: string;
}

interface FolderToGroupsCreationAttributes extends Optional<
    FolderToGroupsAttributes, 'id'
> {}

class FolderToGroups extends Model<
    FolderToGroupsAttributes, 
    FolderToGroupsCreationAttributes
> implements FolderToGroupsAttributes {
    public id!: string;
    public folder_id!: string;
    public group_id!: string;
}

FolderToGroups.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },

    folder_id: {
        type: DataTypes.UUID,
        allowNull: false,
    },

    group_id: {
        type: DataTypes.UUID,
        allowNull: false,
    },
}, {
    sequelize,
    tableName: 'folder_to_groups',
    modelName: 'FolderToGroups',
    timestamps: false,
});

export default FolderToGroups;