"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const serializePaginate_1 = __importDefault(require("server/utils/serializePaginate"));
const cities_model_1 = __importDefault(require("core/database/models/cities.model"));
const api_error_1 = __importDefault(require("core/errors/api.error"));
const sequelize_1 = require("sequelize");
class CitiesService {
    async createCity(data) {
        const cityCandidate = await cities_model_1.default.findOne({ where: { name_rus: data.name_rus } });
        if (cityCandidate) {
            throw api_error_1.default.BadRequest('Данный город уже существует');
        }
        const createdCity = await cities_model_1.default.create(data);
        if (!createdCity) {
            throw api_error_1.default.UnknownError('Не получилось создать город');
        }
        return createdCity;
    }
    async updateCity(id, data) {
        const city = await cities_model_1.default.findOne({ where: { id } });
        if (!city) {
            throw api_error_1.default.BadRequest('Город не был найден');
        }
        const updatedCity = await city.update(data);
        if (!updatedCity) {
            throw api_error_1.default.UnknownError('Не получилось обновить город');
        }
        return updatedCity;
    }
    async editCity(id, data) {
        const city = await cities_model_1.default.findOne({ where: { id } });
        if (!city) {
            throw api_error_1.default.BadRequest('Город не был найден');
        }
        Object.keys(data).forEach((key) => {
            if (data[key] !== undefined) {
                if (key === 'keywords') {
                    city[key] = data[key];
                }
                else {
                    city[key] = data[key];
                }
            }
        });
        const editedCity = await city.save();
        return editedCity;
    }
    async deleteCity(id) {
        const city = await cities_model_1.default.findOne({ where: { id } });
        if (!city) {
            throw api_error_1.default.BadRequest('Город не был найден');
        }
        await city.destroy();
        return {
            message: 'Город был успешно удален'
        };
    }
    async getCityById(id) {
        const city = await cities_model_1.default.findOne({ where: { id } });
        if (!city) {
            throw api_error_1.default.BadRequest('Город не был найден');
        }
        return city;
    }
    async getAllCity(paginate, filters) {
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
        const cities = await cities_model_1.default.findAndCountAll({
            where: whereClause,
            order: orderClause,
            offset,
            limit,
        });
        return (0, serializePaginate_1.default)(cities, { limit, offset });
    }
}
exports.default = new CitiesService;
