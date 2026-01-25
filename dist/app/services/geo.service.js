"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const countries_model_1 = __importDefault(require("core/database/models/countries.model"));
const cities_model_1 = __importDefault(require("core/database/models/cities.model"));
const sequelize_1 = require("sequelize");
class GeoService {
    async findCountriesAndCities(input) {
        const words = input
            .toLowerCase()
            .replace(/[^a-zа-яё0-9\s]/gi, " ")
            .split(/\s+/)
            .filter(Boolean);
        const countryMatches = [];
        const cityMatches = [];
        for (const word of words) {
            const country = await countries_model_1.default.findOne({
                where: {
                    [sequelize_1.Op.or]: [
                        { name_rus: { [sequelize_1.Op.iLike]: `%${word}%` } },
                        { name_uzb: { [sequelize_1.Op.iLike]: `%${word}%` } },
                        { name_eng: { [sequelize_1.Op.iLike]: `%${word}%` } }
                    ]
                }
            });
            if (country) {
                countryMatches.push(country);
            }
            const city = await cities_model_1.default.findOne({
                where: {
                    [sequelize_1.Op.or]: [
                        { name_rus: { [sequelize_1.Op.iLike]: `%${word}%` } },
                        { name_uzb: { [sequelize_1.Op.iLike]: `%${word}%` } },
                        { name_eng: { [sequelize_1.Op.iLike]: `%${word}%` } }
                    ]
                }
            });
            if (city) {
                cityMatches.push(city);
            }
            ;
        }
        return { countryMatches, cityMatches };
    }
    async getAllCitiesByCountry(countryId) {
        return cities_model_1.default.findAll({
            where: {
                country_id: countryId
            }
        });
    }
}
exports.default = new GeoService();
