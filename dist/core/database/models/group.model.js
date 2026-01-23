"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize_2 = __importDefault(require("../../../plugins/sequelize"));
class Group extends sequelize_1.Model {
    id;
    group_id;
    title;
    username;
    type;
    created_at;
    updated_at;
}
Group.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true
    },
    group_id: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    title: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    username: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
    type: {
        type: sequelize_1.DataTypes.ENUM('group', 'supergroup'),
        allowNull: false
    },
    created_at: {
        type: sequelize_1.DataTypes.DATE,
        defaultValue: sequelize_1.DataTypes.NOW
    },
    updated_at: {
        type: sequelize_1.DataTypes.DATE,
        defaultValue: sequelize_1.DataTypes.NOW
    },
}, {
    sequelize: sequelize_2.default,
    tableName: 'groups',
    modelName: 'Group',
    timestamps: true,
    underscored: true,
});
exports.default = Group;
