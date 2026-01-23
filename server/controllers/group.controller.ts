import { NextFunction, Request, Response } from "express";

import { PaginateDTO } from "../dtos/paginate.dto";
import { FiltersDTO } from "../dtos/filters.dto";

import groupService from "../services/group.service";

class GroupController {
    async getAll (req: Request, res: Response, next: NextFunction) {
        try {
            const page: number = Number(req.query.page) || 1;
            const limit: number = Number(req.query.limit) || 10;

            const where: string = req.query.where as string;
            const whereField: string = req.query.where_field as string;

            const orderBy: string = req.query.order_by as string;
            const orderType: string = req.query.order_type as string;

            const search: string = req.query.search as string;
            const searchField: string = req.query.search_field as string;

            const paginate: PaginateDTO = { page, limit };
            const filters: FiltersDTO = { where, whereField, orderBy, orderType, search, searchField };

            const groups = await groupService.getAllGroups(paginate, filters);
            return res.status(200).json(groups);
        }
        catch (error) {
            next(error);
        }
    }

    async getById (req: Request, res: Response, next: NextFunction) {
        try {
            const id: string = req.params.id;

            const group = await groupService.getGroupById(id);
            return res.status(200).json(group);
        }
        catch (error) {
            next(error);
        }
    }

    async delete (req: Request, res: Response, next: NextFunction) {
        try {
            const id: string = req.params.id;
            const deletedMessage = await groupService.deleteGroup(id);

            return res.status(200).json(deletedMessage);
        }
        catch (error) {
            next(error);
        }
    }

    async update (req: Request, res: Response, next: NextFunction) {
        try {
            const id: string = req.params.id;

            const title: string = req.body.name;
            const user_name: string = req.body.user_name;
            const type: string = req.body.type;

            const updatedGroup = await groupService.updateGroup(id, { title, user_name, type });
            return res.status(200).json(updatedGroup);
        }
        catch (error) {
            next(error);
        }
    }

    async edit (req: Request, res: Response, next: NextFunction) {
        try {
            const id: string = req.params.id;

            const title: string = req.body.name;
            const user_name: string = req.body.user_name;
            const type: string = req.body.type;

            const editedGroup = await groupService.editGroup(id, { title, user_name, type });
            return res.status(200).json(editedGroup);
        }
        catch (error) {
            next(error);
        }
    }
}

export default new GroupController();