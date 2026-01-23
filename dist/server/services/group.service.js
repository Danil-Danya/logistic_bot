"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const api_error_1 = __importDefault(require("../../core/errors/api.error"));
const group_model_1 = __importDefault(require("core/database/models/group.model"));
const sequelize_1 = require("sequelize");
const serializePaginate_1 = __importDefault(require("server/utils/serializePaginate"));
class groupService {
    include;
    constructor() {
        this.include = [];
    }
    async getAllGroups(paginate, filters) {
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
        const groups = await group_model_1.default.findAndCountAll({
            where: whereClause,
            order: orderClause,
            include: this.include,
            offset,
            limit,
        });
        return (0, serializePaginate_1.default)(groups, { limit, offset });
    }
    async getGroupById(id) {
        if (!id) {
            throw api_error_1.default.BadRequest("Не передан ID группы");
        }
        const group = await group_model_1.default.findByPk(id, { include: this.include });
        if (!group) {
            throw api_error_1.default.NotFound("Группа не найдена");
        }
        return group;
    }
    async deleteGroup(id) {
        if (!id) {
            throw api_error_1.default.BadRequest("Не передан ID группы");
        }
        const group = await group_model_1.default.findByPk(id);
        if (!group) {
            throw api_error_1.default.NotFound("Группа не найдена");
        }
        await group.destroy();
        return {
            message: "Группа успешно удалена"
        };
    }
    async updateGroup(id, data) {
        if (!id) {
            throw api_error_1.default.BadRequest("Не передан ID группы");
        }
        const group = await group_model_1.default.findByPk(id);
        if (!group) {
            throw api_error_1.default.NotFound("Группа не найдена");
        }
        const updatedGroup = await group.update(data);
        return updatedGroup;
    }
    async editGroup(id, data) {
        if (!id) {
            throw api_error_1.default.BadRequest("Не передан ID группы");
        }
        const group = await group_model_1.default.findByPk(id);
        if (!group) {
            throw api_error_1.default.NotFound("Группа не найдена");
        }
        Object.keys(data).forEach((key) => {
            if (data[key] !== undefined) {
                group[key] = data[key];
            }
        });
        const editedGroup = await group.save();
        return editedGroup;
    }
}
exports.default = new groupService();
