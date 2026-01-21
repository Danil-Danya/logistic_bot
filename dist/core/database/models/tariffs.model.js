import { Model, DataTypes } from 'sequelize';
import sequelize from '../../../plugins/sequelize';
class Tariff extends Model {
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
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    period: {
        type: DataTypes.ENUM('daily', 'weekly', 'monthly', 'yearly'),
        allowNull: false,
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
    tableName: 'tariffs',
    modelName: 'Tariff',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    timestamps: true,
});
export default Tariff;
