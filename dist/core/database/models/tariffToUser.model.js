"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize_2 = __importDefault(require("../../../plugins/sequelize"));
class TariffToUser extends sequelize_1.Model {
    id;
    tariff_id;
    user_id;
    status;
    started_at;
    ended_at;
    created_at;
    updated_at;
}
TariffToUser.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true,
    },
    tariff_id: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false,
    },
    user_id: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false,
    },
    status: {
        type: sequelize_1.DataTypes.ENUM('ACTIVE', 'EXPIRED', 'CANCELLED'),
        allowNull: false,
        defaultValue: 'ACTIVE',
    },
    started_at: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize_1.DataTypes.NOW,
    },
    ended_at: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true,
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
    tableName: 'tariffs_to_users',
    modelName: 'TariffToUser',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    timestamps: true,
});
exports.default = TariffToUser;
