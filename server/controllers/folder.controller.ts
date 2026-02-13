import { NextFunction, Request, Response } from "express";

import { PaginateDTO } from '../dtos/paginate.dto';
import { FiltersDTO } from '../dtos/filters.dto';

import folderService from '../services/folder.service';

class FolderController {
    async create(req: Request, res: Response, next: NextFunction) {
        try {
            const name: string = req.body.name;
            const link: string = req.body.link;
            
            const createdFolder = await folderService.createFolder({ name, link });
            return res.status(201).json(createdFolder);
        }
        catch (error) {
            next(error);
        }
    }

    async update(req: Request, res: Response, next: NextFunction) {
        try {
            const id: string = req.params.id;

            const name: string = req.body.name;
            const link: string = req.body.link;

            const updatedFolder = await folderService.updateFolder(id, { name, link });
            return res.status(200).json(updatedFolder);
        }
        catch (error) {
            next(error);
        }
    }

    async edit(req: Request, res: Response, next: NextFunction) {
        try {
            const id: string = req.params.id;

            const name: string = req.body.name;
            const link: string = req.body.link;

            const editedFolder = await folderService.editFolder(id, { name, link });
            return res.status(200).json(editedFolder);
        }
        catch (error) {
            next(error);
        }
    }

    async delete(req: Request, res: Response, next: NextFunction) {
        try {
            const id: string = req.params.id;
            const deletedMessage = await folderService.deleteFolder(id);

            return res.status(200).json(deletedMessage);
        }
        catch (error) {
            next(error);
        }
    }

    async getAll(req: Request, res: Response, next: NextFunction) {
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

            const folders = await folderService.getFolders(filters, paginate);
            return res.status(200).json(folders);
        }
        catch (error) {
            next(error);
        }
    }

    async getById(req: Request, res: Response, next: NextFunction) {
        try {
            const id: string = req.params.id;

            const folder = await folderService.getFolderById(id);
            return res.status(200).json(folder);
        }
        catch (error) {
            next(error);
        }
    }

    async addGroup(req: Request, res: Response, next: NextFunction) {
        try {
            const folderId: string = req.body.folderId;
            const groupId: string = req.body.groupId;

            const result = await folderService.addGroupToFolder(folderId, groupId);
            return res.status(200).json(result);
        }
        catch (error) {
            next(error);
        }
    }
}

export default new FolderController();