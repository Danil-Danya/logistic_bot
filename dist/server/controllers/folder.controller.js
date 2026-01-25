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
            return res.status(201).json(createdFolder);
        }
        catch (error) {
            next(error);
        }
    }
    async update(req, res, next) {
        try {
            const id = req.params.id;
            const name = req.body.name;
            const link = req.body.link;
            const updatedFolder = await folder_service_1.default.updateFolder(id, { name, link });
            return res.status(200).json(updatedFolder);
        }
        catch (error) {
            next(error);
        }
    }
    async edit(req, res, next) {
        try {
            const id = req.params.id;
            const name = req.body.name;
            const link = req.body.link;
            const editedFolder = await folder_service_1.default.editFolder(id, { name, link });
            return res.status(200).json(editedFolder);
        }
        catch (error) {
            next(error);
        }
    }
    async delete(req, res, next) {
        try {
            const id = req.params.id;
            const deletedMessage = await folder_service_1.default.deleteFolder(id);
            return res.status(200).json(deletedMessage);
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
            const folders = await folder_service_1.default.getFolders(filters, paginate);
            return res.status(200).json(folders);
        }
        catch (error) {
            next(error);
        }
    }
    async getById(req, res, next) {
        try {
            const id = req.params.id;
            const folder = await folder_service_1.default.getFolderById(id);
            return res.status(200).json(folder);
        }
        catch (error) {
            next(error);
        }
    }
    async addGroup(req, res, next) {
        try {
            const folderId = req.body.folderId;
            const groupId = req.body.groupId;
            const result = await folder_service_1.default.addGroupToFolder(folderId, groupId);
            return res.status(200).json(result);
        }
        catch (error) {
            next(error);
        }
    }
}
exports.default = new FolderController();
