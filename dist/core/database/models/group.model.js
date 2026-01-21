import { DataTypes, Model } from 'sequelize';
import sequelize from "../../../plugins/sequelize";
class Group extends Model {
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
        type: DataTypes.UUID,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    group_id: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    username: {
        type: DataTypes.STRING,
        allowNull: true
    },
    type: {
        type: DataTypes.ENUM('group', 'supergroup'),
        allowNull: false
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    updated_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
}, {
    sequelize,
    tableName: 'groups',
    modelName: 'Group',
    timestamps: true,
    underscored: true,
});
export default Group;
