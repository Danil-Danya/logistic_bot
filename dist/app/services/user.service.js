"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const init_model_1 = require("../../core/database/models/init.model");
class UserService {
    async createUser(ctx) {
        try {
            const from = ctx.from;
            if (!from) {
                throw new Error("User not found");
            }
            const user = await init_model_1.User.findOne({ where: { chat_id: from.id.toString() } });
            if (user) {
                return;
            }
            const newUser = await init_model_1.User.create({
                first_name: from.first_name || "Без имени",
                last_name: from.last_name || undefined,
                user_name: from.username || undefined,
                chat_id: String(from.id),
            });
            return newUser;
        }
        catch (error) {
            console.log(error);
        }
    }
}
exports.default = new UserService();
