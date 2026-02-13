import { Model, DataTypes } from "sequelize";
import type { Optional } from "sequelize";

import sequelize from "../../../plugins/sequelize";

export type TariffI18n = {
    ru: string;
    en: string;
    uz: string;
};

interface TariffAttributes {
    id: string;
    code: string;
    name: string;
    description: TariffI18n | null;
    price: number;
    period: "daily" | "weekly" | "monthly" | "yearly";

    created_at: Date;
    updated_at: Date;
}

interface TariffCreationAttributes extends Optional<
    TariffAttributes,
    "id" | "created_at" | "updated_at" | "description"
> {}

class Tariff
    extends Model<TariffAttributes, TariffCreationAttributes>
    implements TariffAttributes
{
    public id!: string;
    public code!: string;
    public name!: string;
    public description!: TariffI18n | null;
    public price!: number;
    public period!: "daily" | "weekly" | "monthly" | "yearly";

    public readonly created_at!: Date;
    public readonly updated_at!: Date;
}

Tariff.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },

        code: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },

        name: {
            type: DataTypes.STRING,
            allowNull: false
        },

        description: {
            type: DataTypes.JSONB,
            allowNull: true
        },

        price: {
            type: DataTypes.FLOAT,
            allowNull: false
        },

        period: {
            type: DataTypes.ENUM("daily", "weekly", "monthly", "yearly"),
            allowNull: false
        },

        created_at: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },

        updated_at: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        }
    },
    {
        sequelize,
        tableName: "tariffs",
        modelName: "Tariff",
        createdAt: "created_at",
        updatedAt: "updated_at",
        timestamps: true
    }
);

export default Tariff;
