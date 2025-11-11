import { DataTypes, Model } from "sequelize";
import type { Optional } from "sequelize";

import sequelize from "../../../plugins/sequelize.ts";

interface UserAttributes {
    id: string;
    first_name: string;
    last_name: string;
    user_name: string;
    chat_id: string;
    created_at: Date;
    updated_at: Date;
}

interface UserCreationAttributes extends Optional<UserAttributes, 'id', 'first_name', 'last_name'> {}

class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
    public id!: string;
    public first_name!: string | null;
    public last_name!: string | null;
    public user_name!: string;
    public chat_id!: string;

    public readonly created_at!: Date;
    public readonly updated_at!: Date;
}

User.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    user_name: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    chat_id: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
    updated_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
},{
    sequelize,
    modelName: 'User',
    tableName: 'users',
    timestamps: true, 
    createdAt: 'created_at',
    updatedAt: 'updated_at',
});

export default User;