
import ApiError from "core/errors/api.error";

import TariffToUser from "core/database/models/tariffToUser.model";
import TariffModel from "core/database/models/tariffs.model";

import { Includeable } from "sequelize";

class TariffsService {
    private include: Includeable[];

    constructor () {
        this.include = [];
    }

    async createTariffs () {

    }

    async updateTariffs () {

    }

    async editTariffs () {

    }

    async deleteTariffs () {

    }

    async getAllTariffs () {

    }

    async getOneTariffById () {

    }
}

export default TariffsService;