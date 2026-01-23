"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const folder_service_1 = __importDefault(require("../services/folder.service"));
class FolderController {
    async create(req, res, next) {
        try {
            const name = req.body.name;
            const link = req.body.link;
            const createdFolder = await folder_service_1.default.createFolder({ name, link });
        }
        catch (error) {
            next(error);
        }
    }
    async update(req, res, next) {
        try {
        }
        catch (error) {
            next(error);
        }
    }
    async edit(req, res, next) {
        try {
        }
        catch (error) {
            next(error);
        }
    }
    async delete(req, res, next) {
        try {
        }
        catch (error) {
            next(error);
        }
    }
    async getAll(req, res, next) {
        try {
        }
        catch (error) {
            next(error);
        }
    }
    async getById(req, res, next) {
        try {
        }
        catch (error) {
            next(error);
        }
    }
}
exports.default = new FolderController();
