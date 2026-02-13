"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.up = up;
async function up(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`
        UPDATE countries
        SET keywords = (
            SELECT array_agg(lower(trim(k)))
            FROM unnest(keywords) AS k
            WHERE k IS NOT NULL AND trim(k) <> ''
        )
        WHERE keywords IS NOT NULL;
    `);
    await queryInterface.sequelize.query(`
        UPDATE cities
        SET keywords = (
            SELECT array_agg(lower(trim(k)))
            FROM unnest(keywords) AS k
            WHERE k IS NOT NULL AND trim(k) <> ''
        )
        WHERE keywords IS NOT NULL;
    `);
}
