import ApiError from "../../core/errors/api.error";

import PaginateDTO from "server/dtos/paginate.dto";
import FiltersDTO from "server/dtos/filters.dto";
import GroupDTO from "server/dtos/group.dto";

import GroupModel from "core/database/models/group.model";

import { Includeable, Order, Op } from "sequelize";
import paginateSerialize from "server/utils/serializePaginate";

class groupService {
    private include: Includeable[];

    constructor () {
        this.include = [];
    }

    async getAllGroups(paginate: PaginateDTO, filters: FiltersDTO) {
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

        const groups = await GroupModel.findAndCountAll({ 
            where: whereClause, 
            order: orderClause, 
            include: this.include,
            offset, 
            limit, 
        });

        return paginateSerialize(groups, { limit, offset });
    }

    async getGroupById(id: string) {
        if (!id) {
            throw ApiError.BadRequest("Не передан ID группы");
        }

        const group = await GroupModel.findByPk(id, { include: this.include });
        if (!group) {
            throw ApiError.NotFound("Группа не найдена");
        }

        return group;
    }

    async deleteGroup(id: string) {
        if (!id) {
            throw ApiError.BadRequest("Не передан ID группы");
        }

        const group = await GroupModel.findByPk(id);
        if (!group) {
            throw ApiError.NotFound("Группа не найдена");
        }

        await group.destroy();

        return {
            message: "Группа успешно удалена"
        };
    }

    async updateGroup(id: string, data: GroupDTO) {
        if (!id) {
            throw ApiError.BadRequest("Не передан ID группы");
        }

        const group = await GroupModel.findByPk(id);
        if (!group) {
            throw ApiError.NotFound("Группа не найдена");
        }

        const updatedGroup = await group.update(data);
        return updatedGroup;
    }

    async editGroup(id: string, data: GroupDTO) {
        if (!id) {
            throw ApiError.BadRequest("Не передан ID группы");
        }

        const group: any = await GroupModel.findByPk(id);
        if (!group) {
            throw ApiError.NotFound("Группа не найдена");
        }

        (Object.keys(data) as (keyof GroupDTO)[]).forEach((key) => {
            if (data[key] !== undefined) {
                group[key] = data[key];
            }
        });

        const editedGroup = await group.save();
        return editedGroup;
    }
}

export default new groupService();