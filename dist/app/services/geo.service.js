"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const countries_model_1 = __importDefault(require("core/database/models/countries.model"));
const cities_model_1 = __importDefault(require("core/database/models/cities.model"));
const sequelize_1 = require("sequelize");
const geo_1 = require("app/utils/geo");
class GeoService {
    async findCountriesAndCitiesByKeywords(input) {
        const words = (0, geo_1.normalizeWords)(input);
        if (!words.length) {
            return { countryMatches: [], cityMatches: [] };
        }
        const countryMatches = await countries_model_1.default.findAll({
            where: {
                [sequelize_1.Op.or]: [
                    { keywords: { [sequelize_1.Op.overlap]: words } },
                    (0, sequelize_1.literal)(`
                        EXISTS (
                            SELECT 1
                            FROM unnest("Countries"."keywords") AS k
                            WHERE ${words.map(w => `k ILIKE '%${w.replace(/'/g, "''")}%'`).join(" OR ")}
                        )
                    `)
                ]
            },
            limit: 5,
            raw: true
        });
        const cityMatches = await cities_model_1.default.findAll({
            where: {
                [sequelize_1.Op.or]: [
                    { keywords: { [sequelize_1.Op.overlap]: words } },
                    (0, sequelize_1.literal)(`
                        EXISTS (
                            SELECT 1
                            FROM unnest("Cities"."keywords") AS k
                            WHERE ${words.map(w => `k ILIKE '%${w.replace(/'/g, "''")}%'`).join(" OR ")}
                        )
                    `)
                ]
            },
            limit: 10,
            raw: true
        });
        return { countryMatches, cityMatches };
    }
    async getAllCitiesByCountry(countryId) {
        return cities_model_1.default.findAll({
            where: {
                country_id: countryId
            },
            raw: true
        });
    }
}
exports.default = new GeoService();
