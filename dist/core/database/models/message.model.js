"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize_2 = __importDefault(require("../../../plugins/sequelize"));
class Message extends sequelize_1.Model {
    id;
    message_id;
    author_name;
    text;
    date;
    group_id;
}
Message.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true
    },
    message_id: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    author_name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
    text: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false
    },
    date: {
        type: sequelize_1.DataTypes.DATE,
        defaultValue: sequelize_1.DataTypes.NOW
    },
    group_id: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
}, {
    sequelize: sequelize_2.default,
    tableName: 'messages',
    modelName: 'Message',
    timestamps: false,
});
exports.default = Message;
