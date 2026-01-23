"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize_2 = __importDefault(require("../../../plugins/sequelize"));
class FolderToUser extends sequelize_1.Model {
    id;
    folder_id;
    user_id;
}
FolderToUser.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true,
    },
    folder_id: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false,
    },
    user_id: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false,
    },
}, {
    sequelize: sequelize_2.default,
    tableName: 'folder_to_user',
    modelName: 'FolderToUser',
    timestamps: false,
});
exports.default = FolderToUser;
