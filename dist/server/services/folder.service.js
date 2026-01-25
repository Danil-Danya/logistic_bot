"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const api_error_1 = __importDefault(require("../../core/errors/api.error"));
const serializePaginate_1 = __importDefault(require("../utils/serializePaginate"));
const folders_model_1 = __importDefault(require("../../core/database/models/folders.model"));
const group_model_1 = __importDefault(require("../../core/database/models/group.model"));
const sequelize_1 = require("sequelize");
class FolderService {
    include;
    constructor() {
        this.include = [{ model: group_model_1.default, as: "groups", through: { attributes: [] } }];
    }
    async createFolder(data) {
        const folder = await folders_model_1.default.create(data);
        if (!folder) {
            throw api_error_1.default.BadRequest("Не удалось создать папку");
        }
        return folder;
    }
    async updateFolder(id, data) {
        if (!id) {
            throw api_error_1.default.BadRequest("Не передан ID папки");
        }
        const folder = await folders_model_1.default.findByPk(id);
        if (!folder) {
            throw api_error_1.default.NotFound("Папка не найдена");
        }
        const updatedFolder = await folder.update(data);
        if (!updatedFolder) {
            throw api_error_1.default.BadRequest("Не удалось обновить папку");
        }
        return updatedFolder;
    }
    async editFolder(id, data) {
        if (!id) {
            throw api_error_1.default.BadRequest("Не передан ID папки");
        }
        const folder = await folders_model_1.default.findByPk(id);
        if (!folder) {
            throw api_error_1.default.NotFound("Папка не найдена");
        }
        Object.keys(data).forEach((key) => {
            if (data[key] !== undefined) {
                folder[key] = data[key];
            }
        });
        const editedFolder = await folder.save();
        if (!editedFolder) {
            throw api_error_1.default.BadRequest("Не удалось отредактировать папку");
        }
        return editedFolder;
    }
    async deleteFolder(id) {
        if (!id) {
            throw api_error_1.default.BadRequest("Не передан ID папки");
        }
        const folder = await folders_model_1.default.findByPk(id);
        if (!folder) {
            throw api_error_1.default.NotFound("Папка не найдена");
        }
        await folder.destroy();
        return {
            message: "Папка успешно удалена"
        };
    }
    async getFolderById(id) {
        if (!id) {
            throw api_error_1.default.BadRequest("Не передан ID папки");
        }
        const folder = await folders_model_1.default.findByPk(id, { include: this.include });
        if (!folder) {
            throw api_error_1.default.NotFound("Папка не найдена");
        }
        return folder;
    }
    async getFolders(filters, paginate) {
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
        const folders = await folders_model_1.default.findAndCountAll({
            where: whereClause,
            order: orderClause,
            include: this.include,
            offset,
            limit,
        });
        return (0, serializePaginate_1.default)(folders, { limit, offset });
    }
    async addGroupToFolder(folderId, groupId) {
        if (!folderId) {
            throw api_error_1.default.BadRequest("Не передан ID папки");
        }
        if (!groupId) {
            throw api_error_1.default.BadRequest("Не передан ID группы");
        }
        const folder = await folders_model_1.default.findByPk(folderId);
        if (!folder) {
            throw api_error_1.default.NotFound("Папка не найдена");
        }
        const group = await group_model_1.default.findByPk(groupId);
        if (!group) {
            throw api_error_1.default.NotFound("Группа не найдена");
        }
        await folder.addGroup(group);
        return {
            message: "Группа успешно добавлена в папку",
        };
    }
}
exports.default = new FolderService;
