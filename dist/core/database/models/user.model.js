"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize_2 = __importDefault(require("../../../plugins/sequelize"));
class User extends sequelize_1.Model {
    id;
    first_name;
    last_name;
    user_name;
    chat_id;
    avatar_path;
    role;
    lang;
    created_at;
    updated_at;
}
User.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true,
    },
    first_name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    last_name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    user_name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    chat_id: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    avatar_path: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
        defaultValue: '/uploads/images/default_avatar.png',
    },
    role: {
        type: sequelize_1.DataTypes.ENUM('USER', 'STAFF', 'ADMIN'),
        allowNull: false,
        defaultValue: 'USER',
    },
    lang: {
        type: sequelize_1.DataTypes.ENUM('rus', 'eng', 'uzb'),
        allowNull: true,
    },
    created_at: {
        type: sequelize_1.DataTypes.DATE,
        defaultValue: sequelize_1.DataTypes.NOW,
    },
    updated_at: {
        type: sequelize_1.DataTypes.DATE,
        defaultValue: sequelize_1.DataTypes.NOW,
    },
}, {
    sequelize: sequelize_2.default,
    modelName: 'User',
    tableName: 'users',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
});
exports.default = User;
