import CountriesModel from "core/database/models/countries.model";
import CitiesModel from "core/database/models/cities.model";
import sequelize from "plugins/sequelize";

import { Op, literal } from "sequelize";
import { normalizeWords, uniqLimit } from "app/utils/geo";

class GeoService {
    async findCountriesAndCitiesByKeywords(input: string) {
        const words: string[] = normalizeWords(input);

        if (!words.length) {
            return { countryMatches: [], cityMatches: [] };
        }

        const countryMatches = await CountriesModel.findAll({
            where: {
                [Op.or]: [
                    { keywords: { [Op.overlap]: words } },
                    literal(`
                        EXISTS (
                            SELECT 1
                            FROM unnest("Countries"."keywords") AS k
                            WHERE ${words.map(w => `k ILIKE '%${w.replace(/'/g, "''")}%'`).join(" OR ")}
                        )
                    `)
                ]
            },
            limit: 5,
            raw: true
        });

        const cityMatches = await CitiesModel.findAll({
            where: {
                [Op.or]: [
                    { keywords: { [Op.overlap]: words } },
                    literal(`
                        EXISTS (
                            SELECT 1
                            FROM unnest("Cities"."keywords") AS k
                            WHERE ${words.map(w => `k ILIKE '%${w.replace(/'/g, "''")}%'`).join(" OR ")}
                        )
                    `)
                ]
            },
            limit: 10,
            raw: true
        });

        return { countryMatches, cityMatches };
    }

    async getAllCitiesByCountry(countryId: string) {
        return CitiesModel.findAll({
            where: {
                country_id: countryId
            },
            raw: true
        });
    }
}

export default new GeoService();
