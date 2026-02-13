import CountriesModel from "core/database/models/countries.model";
import ApiError from "core/errors/api.error";
import CitiesModel from "core/database/models/cities.model";

import { CreateCountriesDTO, UpdateCountriesDTO } from "server/dtos/country.dto";
import { FiltersDTO } from "server/dtos/filters.dto";
import { PaginateDTO } from "server/dtos/paginate.dto";

import { Includeable, Op, Order } from "sequelize";
import paginateSerialize from "server/utils/serializePaginate";

class CountriesServices {
    private include: Includeable[];

    constructor () {
        this.include = [{ model: CitiesModel, as: 'cities' }];    
    }

    async createCountry (data: CreateCountriesDTO) {
        console.log(data);
        const executeCountry = await CountriesModel.findOne({ where: { name_rus: data.name_rus } });
        if (executeCountry) {
            throw ApiError.BadRequest('Данная страна уже существует');
        }

        const createdCountry = await CountriesModel.create(data);
        if (!createdCountry) {
            throw ApiError.UnknownError('Страна не была создана');
        }

        return createdCountry;
    }

    async updateCountry (id: string, data: UpdateCountriesDTO) {
        const country = await CountriesModel.findOne({ where: { id } });
        if (!country) {
            throw ApiError.BadRequest('Страна не была найдена.');
        }

        const updatedCountry = await country.update(data);
        if (!updatedCountry) {
            throw ApiError.UnknownError('Не получилось обновить страну');
        }

        return updatedCountry;
    }

    async editCountry (id: string, data: UpdateCountriesDTO) {
        const country = await CountriesModel.findOne({ where: { id } });
        if (!country) {
            throw ApiError.BadRequest('Страна не была найдена.');
        }

        (Object.keys(data) as (keyof UpdateCountriesDTO)[]).forEach((key) => {
            if (data[key] !== undefined) {
                if (key === 'keywords') {
                    country[key] = data[key] as string[];
                } 
                else {
                    country[key] = data[key] as string;
                }
            }
        });

        const editedCountry = await country.save();
        return editedCountry;
    }

    async deleteCountry (id: string) {
        const country = await CountriesModel.findOne({ where: { id } });
        if (!country) {
            throw ApiError.BadRequest('Страна не была найдена.');
        }

        await country.destroy();

        return {
            message: 'Страна была успешно удалена'
        }
    }

    async getCountryById (id: string) {
        const country = await CountriesModel.findOne({ where: { id } });
        if (!country) {
            throw ApiError.BadRequest('Страна не была найдена.');
        }

        return country;
    }

    async getAllCountries (paginate: PaginateDTO, filters: FiltersDTO) {
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

        const countries = await CountriesModel.findAndCountAll({ 
            include: this.include ? this.include : undefined,
            where: whereClause, 
            order: orderClause,
            offset,
            limit,
        });

        return paginateSerialize(countries, { limit, offset });
    }
}

export default new CountriesServices;