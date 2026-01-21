import { Model, DataTypes } from 'sequelize';
import type { Optional } from "sequelize";

import sequelize from '../../../plugins/sequelize';

interface TariffToUserAttributes {
    id: string;
    tariff_id: string;
    user_id: string;

    status: string;

    started_at: Date;
    ended_at: Date;

    created_at: Date;
    updated_at: Date;
}

interface TariffToUserCreationAttributes extends Optional<
    TariffToUserAttributes, 
    'id' | 'status' | 'started_at' | 'ended_at' | 'created_at' | 'updated_at'
> {}

class TariffToUser extends Model<
    TariffToUserAttributes, 
    TariffToUserCreationAttributes
> implements TariffToUserAttributes {
    public id!: string;
    public tariff_id!: string
    public user_id!: string;

    public status!: string;

    public started_at!: Date;
    public ended_at!: Date;

    public readonly created_at!: Date;
    public readonly updated_at!: Date;
}

TariffToUser.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },

    tariff_id: {
        type: DataTypes.UUID,
        allowNull: false,
    },

    user_id: {
        type: DataTypes.UUID,
        allowNull: false,
    },

    status: {
        type: DataTypes.ENUM('ACTIVE', 'EXPIRED', 'CANCELLED'),
        allowNull: false,
        defaultValue: 'ACTIVE',
    },

    started_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },

    ended_at: {
        type: DataTypes.DATE,
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
    tableName: 'tariffs_to_users',
    modelName: 'TariffToUser',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    timestamps: true,
});

export default TariffToUser;