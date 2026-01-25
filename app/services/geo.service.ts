import CountriesModel from "core/database/models/countries.model";
import CitiesModel from "core/database/models/cities.model";
import { Op } from "sequelize";

class GeoService {
    async findCountriesAndCities(input: string) {
        const words = input
        .toLowerCase()
        .replace(/[^a-zа-яё0-9\s]/gi, " ")
        .split(/\s+/)
        .filter(Boolean);

        const countryMatches = [];
        const cityMatches = [];

        for (const word of words) {
            const country = await CountriesModel.findOne({
                where: {
                    [Op.or]: [
                        { name_rus: { [Op.iLike]: `%${word}%` } },
                        { name_uzb: { [Op.iLike]: `%${word}%` } },
                        { name_eng: { [Op.iLike]: `%${word}%` } }
                    ]
                }
            });

            if (country) {
                countryMatches.push(country.dataValues);
            }

            const city = await CitiesModel.findOne({
                where: {
                    [Op.or]: [
                        { name_rus: { [Op.iLike]: `%${word}%` } },
                        { name_uzb: { [Op.iLike]: `%${word}%` } },
                        { name_eng: { [Op.iLike]: `%${word}%` } }
                    ]
                }
            });

            if (city) {
                cityMatches.push(city.dataValues)
            };

            console.log(cityMatches, countryMatches);
            
        }

        return { countryMatches, cityMatches };
    }

    async getAllCitiesByCountry(countryId: string) {
        return CitiesModel.findAll({
            where: { 
                country_id: countryId 
            }
        });
    }
}

export default new GeoService();
