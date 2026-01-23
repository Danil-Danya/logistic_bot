"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize_2 = __importDefault(require("../../../plugins/sequelize"));
class Tariff extends sequelize_1.Model {
    id;
    name;
    description;
    price;
    period;
    created_at;
    updated_at;
}
Tariff.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    description: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: true,
    },
    price: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
    },
    period: {
        type: sequelize_1.DataTypes.ENUM('daily', 'weekly', 'monthly', 'yearly'),
        allowNull: false,
    },
    created_at: {
        type: sequelize_1.DataTypes.DATE,
        defaultValue: sequelize_1.DataTypes.NOW,
    },
    updated_at: {
        type: sequelize_1.DataTypes.DATE,
        defaultValue: sequelize_1.DataTypes.NOW,
    }
}, {
    sequelize: sequelize_2.default,
    tableName: 'tariffs',
    modelName: 'Tariff',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    timestamps: true,
});
exports.default = Tariff;
