import { Model, DataTypes } from 'sequelize';
import sequelize from '../../../plugins/sequelize';
class TariffToUser extends Model {
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
