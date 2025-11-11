import { DataTypes, Model } from 'sequelize';
import type { Optional } from "sequelize";

import sequelize from "../../../plugins/sequelize.ts";

interface GroupAttributes {
    id: number;
    group_id: string;
    title: string;
    username: string | null;
    type: string;
    created_at: Date;
    updated_at: Date;
}

interface GroupCreationAttributes extends Optional<GroupAttributes, 'id' | 'username' | 'created_at' | 'updated_at'> {}

export class Group extends Model<GroupAttributes, GroupCreationAttributes> implements GroupAttributes {
    public id!: number;
    public group_id!: string;
    public title!: string;
    public username!: string | null;
    public type!: string;
    public created_at!: Date;
    public updated_at!: Date;
}

Group.init(
    {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        group_id: { type: DataTypes.STRING, allowNull: false, unique: true },
        title: { type: DataTypes.STRING, allowNull: false },
        username: { type: DataTypes.STRING, allowNull: true },
        type: { type: DataTypes.STRING, allowNull: false },
        created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
        updated_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    },
    {
        sequelize,
        tableName: 'groups',
        modelName: 'Group',
        timestamps: true,
        underscored: true,
    }
);

export default Group;