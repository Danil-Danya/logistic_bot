import citiesService from "server/services/cities.service";

import { NextFunction, Response, Request } from "express";

import { PaginateDTO } from '../dtos/paginate.dto';
import { FiltersDTO } from '../dtos/filters.dto';

class CitiesController {
    async create (req: Request, res: Response, next: NextFunction) {
        try {
            const country_id: string = req.body.country_id;

            const name_rus: string = req.body.name_rus;
            const name_eng: string = req.body.name_eng;
            const name_uzb: string = req.body.name_uzb;

            const keywords: string[] = req.body.keywords;

            const createdCity = await citiesService.createCity({
                country_id,
                name_rus,
                name_eng,
                name_uzb,
                keywords
            })

            return res.status(201).json(createdCity);
        }
        catch (error) {
            next(error);
        }
    }

    async update (req: Request, res: Response, next: NextFunction) {
        try {
            const id: string = req.params.id;
            const country_id: string = req.body.country_id;

            const name_rus: string = req.body.name_rus;
            const name_eng: string = req.body.name_eng;
            const name_uzb: string = req.body.name_uzb;

            const keywords: string[] = req.body.keywords;

            const updatedCity = await citiesService.updateCity(id, {
                country_id,
                name_rus,
                name_eng,
                name_uzb,
                keywords
            })

            return res.status(201).json(updatedCity);
        }
        catch (error) {
            next(error);
        }
    }

    async edit (req: Request, res: Response, next: NextFunction) {
        try {
            const id: string = req.params.id;
            const country_id: string = req.body.country_id;

            const name_rus: string = req.body.name_rus;
            const name_eng: string = req.body.name_eng;
            const name_uzb: string = req.body.name_uzb;

            const keywords: string[] = req.body.keywords;

            const editedCity = await citiesService.editCity(id, {
                country_id,
                name_rus,
                name_eng,
                name_uzb,
                keywords
            })

            return res.status(201).json(editedCity);
        }
        catch (error) {
            next(error);
        }
    }

    async delete (req: Request, res: Response, next: NextFunction) {
        try {
            const id: string = req.params.id;
            const deletedCity = await citiesService.deleteCity(id);

            return res.status(200).json(deletedCity);
        }
        catch (error) {
            next(error);
        }
    }

    async getById (req: Request, res: Response, next: NextFunction) {
        try {
            const id: string = req.params.id;
            const city = await citiesService.getCityById(id);

            return res.status(200).json(city);
        }
        catch (error) {
            next(error);
        }
    }

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

            const cities = await citiesService.getAllCity(paginate, filters);
            return res.status(200).json(cities)
        }
        catch (error) {
            next(error);
        }
    }
}

export default new CitiesController;