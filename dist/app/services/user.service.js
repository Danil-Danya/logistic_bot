"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const init_model_1 = require("../../core/database/models/init.model");
class UserService {
    include;
    constructor() {
        this.include = [{
                model: init_model_1.Folder,
                as: "folders",
                include: [{
                        model: init_model_1.Group,
                        as: 'groups'
                    }]
            }];
    }
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
                first_name: from.first_name,
                last_name: from.last_name,
                user_name: from.username,
                chat_id: String(from.id),
            });
            return newUser;
        }
        catch (error) {
            console.log(error);
        }
    }
    async getUserByChatId(chatId) {
        const user = await init_model_1.User.findOne({ where: { chat_id: chatId }, include: this.include });
        return user;
    }
    async getAllUsers() {
        const users = await init_model_1.User.findAndCountAll({ include: this.include });
        return users;
    }
    async addToUserFolder(userId, folderId) {
        const user = await init_model_1.User.findOne({ where: { id: userId } });
        const folder = await init_model_1.Folder.findOne({ where: { id: folderId } });
        await user.addFolder(folder);
    }
}
exports.default = new UserService();
