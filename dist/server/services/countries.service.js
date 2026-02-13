"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const countries_model_1 = __importDefault(require("core/database/models/countries.model"));
const api_error_1 = __importDefault(require("core/errors/api.error"));
const cities_model_1 = __importDefault(require("core/database/models/cities.model"));
const sequelize_1 = require("sequelize");
const serializePaginate_1 = __importDefault(require("server/utils/serializePaginate"));
class CountriesServices {
    include;
    constructor() {
        this.include = [{ model: cities_model_1.default, as: 'cities' }];
    }
    async createCountry(data) {
        console.log(data);
        const executeCountry = await countries_model_1.default.findOne({ where: { name_rus: data.name_rus } });
        if (executeCountry) {
            throw api_error_1.default.BadRequest('Данная страна уже существует');
        }
        const createdCountry = await countries_model_1.default.create(data);
        if (!createdCountry) {
            throw api_error_1.default.UnknownError('Страна не была создана');
        }
        return createdCountry;
    }
    async updateCountry(id, data) {
        const country = await countries_model_1.default.findOne({ where: { id } });
        if (!country) {
            throw api_error_1.default.BadRequest('Страна не была найдена.');
        }
        const updatedCountry = await country.update(data);
        if (!updatedCountry) {
            throw api_error_1.default.UnknownError('Не получилось обновить страну');
        }
        return updatedCountry;
    }
    async editCountry(id, data) {
        const country = await countries_model_1.default.findOne({ where: { id } });
        if (!country) {
            throw api_error_1.default.BadRequest('Страна не была найдена.');
        }
        Object.keys(data).forEach((key) => {
            if (data[key] !== undefined) {
                if (key === 'keywords') {
                    country[key] = data[key];
                }
                else {
                    country[key] = data[key];
                }
            }
        });
        const editedCountry = await country.save();
        return editedCountry;
    }
    async deleteCountry(id) {
        const country = await countries_model_1.default.findOne({ where: { id } });
        if (!country) {
            throw api_error_1.default.BadRequest('Страна не была найдена.');
        }
        await country.destroy();
        return {
            message: 'Страна была успешно удалена'
        };
    }
    async getCountryById(id) {
        const country = await countries_model_1.default.findOne({ where: { id } });
        if (!country) {
            throw api_error_1.default.BadRequest('Страна не была найдена.');
        }
        return country;
    }
    async getAllCountries(paginate, filters) {
        const { page, limit } = paginate;
        const { where, whereField, orderBy, orderType, search, searchField } = filters;
        let whereClause = {};
        let orderClause = [];
        const offset = page * limit - limit;
        if (where && whereField) {
            whereClause[whereField] = where;
        }
        if (search && searchField) {
            whereClause[searchField] = { [sequelize_1.Op.iLike]: `%${search}%` };
        }
        if (orderBy && orderType) {
            orderClause = [[orderBy, orderType.toUpperCase()]];
        }
        const countries = await countries_model_1.default.findAndCountAll({
            include: this.include ? this.include : undefined,
            where: whereClause,
            order: orderClause,
            offset,
            limit,
        });
        return (0, serializePaginate_1.default)(countries, { limit, offset });
    }
}
exports.default = new CountriesServices;
