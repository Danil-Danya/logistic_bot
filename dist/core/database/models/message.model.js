import { DataTypes, Model } from 'sequelize';
import sequelize from "../../../plugins/sequelize";
class Message extends Model {
    id;
    message_id;
    author_name;
    text;
    date;
    group_id;
}
Message.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    message_id: {
        type: DataTypes.STRING,
        allowNull: false
    },
    author_name: {
        type: DataTypes.STRING,
        allowNull: true
    },
    text: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    group_id: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    sequelize,
    tableName: 'messages',
    modelName: 'Message',
    timestamps: false,
});
export default Message;
