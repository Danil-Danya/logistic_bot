import ApiError from "../../core/errors/api.error";

import paginateSerialize from "../utils/serializePaginate";

import FolderModel from "../../core/database/models/folders.model";
import GroupModel from "../../core/database/models/group.model";

import { CreateFolderDTO, UpdateFolderDTO } from "../dtos/folder.dto.js";
import { FiltersDTO } from "../dtos/filters.dto.js";
import { PaginateDTO } from "../dtos/paginate.dto.js";

import { Includeable, Order, Op } from "sequelize";

class FolderService {
    private include: Includeable[];

    constructor () {
        this.include = [{ model: GroupModel, as: "groups", through: { attributes: [] }}];
    }

    async createFolder (data: CreateFolderDTO) {
        const folder = await FolderModel.create(data);

        if (!folder) {
            throw ApiError.BadRequest("Не удалось создать папку");
        }

        return folder;
    }

    async updateFolder (id: string, data: UpdateFolderDTO) {
        if (!id) {
            throw ApiError.BadRequest("Не передан ID папки");
        }

        const folder = await FolderModel.findByPk(id);
        if (!folder) {
            throw ApiError.NotFound("Папка не найдена");
        }

        const updatedFolder = await folder.update(data);
        if (!updatedFolder) {
            throw ApiError.BadRequest("Не удалось обновить папку");
        }

        return updatedFolder;
    }

    async editFolder (id: string, data: UpdateFolderDTO) {
        if (!id) {
            throw ApiError.BadRequest("Не передан ID папки");
        }

        const folder = await FolderModel.findByPk(id);
        if (!folder) {
            throw ApiError.NotFound("Папка не найдена");
        }

        (Object.keys(data) as (keyof UpdateFolderDTO)[]).forEach((key) => {
            if (data[key] !== undefined) {
                folder[key] = data[key];
            }
        });

        const editedFolder = await folder.save();
        if (!editedFolder) {
            throw ApiError.BadRequest("Не удалось отредактировать папку");
        }

        return editedFolder;
    }

    async deleteFolder (id: string) {
        if (!id) {
            throw ApiError.BadRequest("Не передан ID папки");
        }

        const folder = await FolderModel.findByPk(id);
        if (!folder) {
            throw ApiError.NotFound("Папка не найдена");
        }

        await folder.destroy();

        return {
            message: "Папка успешно удалена"
        };
    }

    async getFolderById (id: string) {
        if (!id) {
            throw ApiError.BadRequest("Не передан ID папки");
        }

        const folder = await FolderModel.findByPk(id, { include: this.include });
        if (!folder) {
            throw ApiError.NotFound("Папка не найдена");
        }

        return folder;
    }

    async getFolders (filters: FiltersDTO, paginate: PaginateDTO) {
        const { page, limit } = paginate;
        const { where, whereField, orderBy, orderType, search, searchField } = filters;

        let whereClause: any = {};
        let orderClause: Order = [];

        const offset = page * limit - limit;

        if (where && whereField) {
            whereClause[whereField] = where;
        }

        if (search && searchField) {
            whereClause[searchField] = { [Op.iLike]: `%${search}%` };
        }

        if (orderBy && orderType) {
            orderClause = [[ orderBy, orderType.toUpperCase() ]];
        }

        const folders = await FolderModel.findAndCountAll({ 
            where: whereClause, 
            order: orderClause,
            include: this.include,
            offset, 
            limit, 
        });

        return paginateSerialize(folders, { limit, offset });
    }

    async addGroupToFolder (folderId: string, groupId: string) {
        if (!folderId) {
            throw ApiError.BadRequest("Не передан ID папки");
        }   

        if (!groupId) {
            throw ApiError.BadRequest("Не передан ID группы");
        }

        const folder: any = await FolderModel.findByPk(folderId);
        if (!folder) {
            throw ApiError.NotFound("Папка не найдена");
        }

        const group = await GroupModel.findByPk(groupId);
        if (!group) {
            throw ApiError.NotFound("Группа не найдена");
        }

        await folder.addGroup(group);

        return {
            message: "Группа успешно добавлена в папку",
        };
    }
}

export default new FolderService;