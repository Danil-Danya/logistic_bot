"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cities_service_1 = __importDefault(require("server/services/cities.service"));
class CitiesController {
    async create(req, res, next) {
        try {
            const country_id = req.body.country_id;
            const name_rus = req.body.name_rus;
            const name_eng = req.body.name_eng;
            const name_uzb = req.body.name_uzb;
            const keywords = req.body.keywords;
            const createdCity = await cities_service_1.default.createCity({
                country_id,
                name_rus,
                name_eng,
                name_uzb,
                keywords
            });
            return res.status(201).json(createdCity);
        }
        catch (error) {
            next(error);
        }
    }
    async update(req, res, next) {
        try {
            const id = req.params.id;
            const country_id = req.body.country_id;
            const name_rus = req.body.name_rus;
            const name_eng = req.body.name_eng;
            const name_uzb = req.body.name_uzb;
            const keywords = req.body.keywords;
            const updatedCity = await cities_service_1.default.updateCity(id, {
                country_id,
                name_rus,
                name_eng,
                name_uzb,
                keywords
            });
            return res.status(201).json(updatedCity);
        }
        catch (error) {
            next(error);
        }
    }
    async edit(req, res, next) {
        try {
            const id = req.params.id;
            const country_id = req.body.country_id;
            const name_rus = req.body.name_rus;
            const name_eng = req.body.name_eng;
            const name_uzb = req.body.name_uzb;
            const keywords = req.body.keywords;
            const editedCity = await cities_service_1.default.editCity(id, {
                country_id,
                name_rus,
                name_eng,
                name_uzb,
                keywords
            });
            return res.status(201).json(editedCity);
        }
        catch (error) {
            next(error);
        }
    }
    async delete(req, res, next) {
        try {
            const id = req.params.id;
            const deletedCity = await cities_service_1.default.deleteCity(id);
            return res.status(200).json(deletedCity);
        }
        catch (error) {
            next(error);
        }
    }
    async getById(req, res, next) {
        try {
            const id = req.params.id;
            const city = await cities_service_1.default.getCityById(id);
            return res.status(200).json(city);
        }
        catch (error) {
            next(error);
        }
    }
    async getAll(req, res, next) {
        try {
            const page = Number(req.query.page) || 1;
            const limit = Number(req.query.limit) || 10;
            const where = req.query.where;
            const whereField = req.query.where_field;
            const orderBy = req.query.order_by;
            const orderType = req.query.order_type;
            const search = req.query.search;
            const searchField = req.query.search_field;
            const paginate = { page, limit };
            const filters = { where, whereField, orderBy, orderType, search, searchField };
            const cities = await cities_service_1.default.getAllCity(paginate, filters);
            return res.status(200).json(cities);
        }
        catch (error) {
            next(error);
        }
    }
}
exports.default = new CitiesController;
