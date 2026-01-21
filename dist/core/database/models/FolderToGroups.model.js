import { Model, DataTypes } from 'sequelize';
import sequelize from '../../../plugins/sequelize';
class FolderToGroups extends Model {
    id;
    folder_id;
    group_id;
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
