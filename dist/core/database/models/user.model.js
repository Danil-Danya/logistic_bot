import { DataTypes, Model } from "sequelize";
import sequelize from "../../../plugins/sequelize";
class User extends Model {
    id;
    first_name;
    last_name;
    user_name;
    chat_id;
    avatar_path;
    role;
    created_at;
    updated_at;
}
User.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    user_name: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    chat_id: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    avatar_path: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: '/uploads/images/default_avatar.png',
    },
    role: {
        type: DataTypes.ENUM('USER', 'STAFF', 'ADMIN'),
        allowNull: false,
        defaultValue: 'USER',
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
    updated_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
}, {
    sequelize,
    modelName: 'User',
    tableName: 'users',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
});
export default User;
