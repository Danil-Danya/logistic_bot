import { Model, DataTypes } from 'sequelize';
import sequelize from '../../../plugins/sequelize';
class FolderToUser extends Model {
    id;
    folder_id;
    user_id;
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
