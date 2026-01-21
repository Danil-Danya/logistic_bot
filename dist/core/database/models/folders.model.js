import { Model, DataTypes } from 'sequelize';
import sequelize from '../../../plugins/sequelize';
class Folder extends Model {
    id;
    name;
    link;
    created_at;
    updated_at;
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
});
export default Folder;
