import paginateSerialize from "server/utils/serializePaginate";
import CitiesModel from "core/database/models/cities.model";
import ApiError from "core/errors/api.error";

import { CreateCitiesDTO, UpdateCitiesDTO } from "server/dtos/cities.dto";
import { FiltersDTO } from "server/dtos/filters.dto";
import { PaginateDTO } from "server/dtos/paginate.dto";
import { Op, Order } from "sequelize";

class CitiesService {
    async createCity (data: CreateCitiesDTO) {
        const cityCandidate = await CitiesModel.findOne({ where: { name_rus: data.name_rus } });
        if (cityCandidate) {
            throw ApiError.BadRequest('Данный город уже существует');
        }
        
        const createdCity = await CitiesModel.create(data);
        if (!createdCity) {
            throw ApiError.UnknownError('Не получилось создать город');
        }

        return createdCity;
    }

    async updateCity (id: string, data: UpdateCitiesDTO) {
        const city = await CitiesModel.findOne({ where: { id } });
        if (!city) {
            throw ApiError.BadRequest('Город не был найден');
        }

        const updatedCity = await city.update(data);
        if (!updatedCity) {
            throw ApiError.UnknownError('Не получилось обновить город');
        }

        return updatedCity;
    }

    async editCity (id: string, data: UpdateCitiesDTO) {
        const city = await CitiesModel.findOne({ where: { id } });
        if (!city) {
            throw ApiError.BadRequest('Город не был найден');
        }

        (Object.keys(data) as (keyof UpdateCitiesDTO)[]).forEach((key) => {
            if (data[key] !== undefined) {
                if (key === 'keywords') {
                    city[key] = data[key] as string[];
                } 
                else {
                    city[key] = data[key] as string;
                }
            }
        });

        const editedCity = await city.save();
        return editedCity;
    }

    async deleteCity (id: string) {
        const city = await CitiesModel.findOne({ where: { id } });
        if (!city) {
            throw ApiError.BadRequest('Город не был найден');
        }

        await city.destroy();
        
        return {
            message: 'Город был успешно удален'
        }
    }

    async getCityById (id: string) {
        const city = await CitiesModel.findOne({ where: { id } });
        if (!city) {
            throw ApiError.BadRequest('Город не был найден');
        }

        return city;
    }

    async getAllCity (paginate: PaginateDTO, filters: FiltersDTO) {
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
        
        const cities = await CitiesModel.findAndCountAll({
            where: whereClause, 
            order: orderClause,
            offset,
            limit,
        })

        return paginateSerialize(cities, { limit, offset })
    }
}

export default new CitiesService;