"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const countries_service_1 = __importDefault(require("server/services/countries.service"));
class CountriesController {
    async create(req, res, next) {
        try {
            const id = req.body.id;
            const name_rus = req.body.name_rus;
            const name_eng = req.body.name_eng;
            const name_uzb = req.body.name_uzb;
            const keywords = req.body.keywords;
            const createdCountry = await countries_service_1.default.createCountry({
                id,
                name_rus,
                name_eng,
                name_uzb,
                keywords
            });
            return res.status(201).json(createdCountry);
        }
        catch (error) {
            next(error);
        }
    }
    async update(req, res, next) {
        try {
            const id = req.params.id;
            const name_rus = req.body.name_rus;
            const name_eng = req.body.name_eng;
            const name_uzb = req.body.name_uzb;
            const keywords = req.body.keywords;
            const updatedCountry = await countries_service_1.default.updateCountry(id, {
                name_rus,
                name_eng,
                name_uzb,
                keywords
            });
            return res.status(201).json(updatedCountry);
        }
        catch (error) {
            next(error);
        }
    }
    async edit(req, res, next) {
        try {
            const id = req.params.id;
            const name_rus = req.body.name_rus;
            const name_eng = req.body.name_eng;
            const name_uzb = req.body.name_uzb;
            const keywords = req.body.keywords;
            const editedCountry = await countries_service_1.default.editCountry(id, {
                name_rus,
                name_eng,
                name_uzb,
                keywords
            });
            return res.status(201).json(editedCountry);
        }
        catch (error) {
            next(error);
        }
    }
    async delete(req, res, next) {
        try {
            const id = req.params.id;
            const deletedCountry = await countries_service_1.default.deleteCountry(id);
            return res.status(200).json(deletedCountry);
        }
        catch (error) {
            next(error);
        }
    }
    async getById(req, res, next) {
        try {
            const id = req.params.id;
            const country = await countries_service_1.default.getCountryById(id);
            return res.status(200).json(country);
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
            const countries = await countries_service_1.default.getAllCountries(paginate, filters);
            return res.status(200).json(countries);
        }
        catch (error) {
            next(error);
        }
    }
}
exports.default = new CountriesController;
