import countriesService from "server/services/countries.service";

import { NextFunction, Response, Request } from "express";

import { PaginateDTO } from '../dtos/paginate.dto';
import { FiltersDTO } from '../dtos/filters.dto';

class CountriesController {
    async create (req: Request, res: Response, next: NextFunction) {
        try {
            const id: string = req.body.id;

            const name_rus: string = req.body.name_rus;
            const name_eng: string = req.body.name_eng;
            const name_uzb: string = req.body.name_uzb;

            const keywords: string[] = req.body.keywords;

            const createdCountry = await countriesService.createCountry({
                id,
                name_rus,
                name_eng,
                name_uzb,
                keywords
            })

            return res.status(201).json(createdCountry);
        }
        catch (error) {
            next(error);
        }
    }

    async update (req: Request, res: Response, next: NextFunction) {
        try {
            const id: string = req.params.id;

            const name_rus: string = req.body.name_rus;
            const name_eng: string = req.body.name_eng;
            const name_uzb: string = req.body.name_uzb;

            const keywords: string[] = req.body.keywords;

            const updatedCountry = await countriesService.updateCountry(id, {
                name_rus,
                name_eng,
                name_uzb,
                keywords
            })

            return res.status(201).json(updatedCountry);
        }
        catch (error) {
            next(error);
        }
    }

    async edit (req: Request, res: Response, next: NextFunction) {
        try {
            const id: string = req.params.id;

            const name_rus: string = req.body.name_rus;
            const name_eng: string = req.body.name_eng;
            const name_uzb: string = req.body.name_uzb;

            const keywords: string[] = req.body.keywords;

            const editedCountry = await countriesService.editCountry(id, {
                name_rus,
                name_eng,
                name_uzb,
                keywords
            })

            return res.status(201).json(editedCountry);
        }
        catch (error) {
            next(error);
        }
    }

    async delete (req: Request, res: Response, next: NextFunction) {
        try {
            const id: string = req.params.id;
            const deletedCountry = await countriesService.deleteCountry(id);

            return res.status(200).json(deletedCountry);
        }
        catch (error) {
            next(error);
        }
    }

    async getById (req: Request, res: Response, next: NextFunction) {
        try {
            const id: string = req.params.id;
            const country = await countriesService.getCountryById(id);

            return res.status(200).json(country);
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

            const countries = await countriesService.getAllCountries(paginate, filters);
            return res.status(200).json(countries);
        }
        catch (error) {
            next(error);
        }
    }
}

export default new CountriesController;