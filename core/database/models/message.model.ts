import { DataTypes, Model } from 'sequelize';
import type { Optional } from "sequelize";

import sequelize from "../../../plugins/sequelize.ts";

interface MessageAttributes {
    id: number;
    message_id: string;
    author_name: string | null;
    text: string;
    date: Date;
    group_id: string;

}

interface MessageCreationAttributes extends Optional<MessageAttributes, 'id' | 'author_name' | 'date'> {}

export class Message extends Model<MessageAttributes, MessageCreationAttributes> implements MessageAttributes {
    public id!: number;
    public message_id!: string;
    public author_name!: string | null;
    public text!: string;
    public date!: Date;
    public group_id!: string;
}

Message.init(
    {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        message_id: { type: DataTypes.STRING, allowNull: false },
        author_name: { type: DataTypes.STRING, allowNull: true },
        text: { type: DataTypes.TEXT, allowNull: false },
        date: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
        group_id: { type: DataTypes.STRING, allowNull: false },
    },
    {
        sequelize,
        tableName: 'messages',
        modelName: 'Message',
        timestamps: false,
    }
);

export default Message;
