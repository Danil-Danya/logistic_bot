"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize_2 = __importDefault(require("../../../plugins/sequelize"));
class Countries extends sequelize_1.Model {
    id;
    name_rus;
    name_eng;
    name_uzb;
}
Countries.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false,
        primaryKey: true
    },
    name_rus: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    name_uzb: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    name_eng: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
}, {
    sequelize: sequelize_2.default,
    tableName: 'countries',
    modelName: 'Countries',
    timestamps: false,
});
exports.default = Countries;
