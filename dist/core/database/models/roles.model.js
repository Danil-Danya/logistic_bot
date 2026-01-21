import { Model, DataTypes } from 'sequelize';
import sequelize from '../../../plugins/sequelize';
class Role extends Model {
    id;
    name;
    description;
    created_at;
    updated_at;
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
});
export default Role;
