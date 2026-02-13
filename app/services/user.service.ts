import { Context } from "grammy";
import { Folder, Group, User } from "../../core/database/models/init.model";
import { Includeable } from "sequelize";

class UserService {
    private include: Includeable[];

    constructor () {
        this.include = [{ 
            model: Folder, 
            as: "folders",
            include: [{
                model: Group,
                as: 'groups'
            }]
        }];
    }

    async createUser(ctx: Context) {
        try {
            const from = ctx.from;

            if (!from) {
                throw new Error("User not found");
            }

            const user = await User.findOne({ where: { chat_id: from.id.toString() } });

            if (user) {
                return;
            }

            const newUser = await User.create({
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

    async getUserByChatId (chatId: string) {
        const user = await User.findOne({ where: { chat_id: chatId }, include: this.include });
        return user;
    }

    async getAllUsers () {
        const users = await User.findAndCountAll({ include: this.include });
        return users;
    }

    async updateUserLang (chatId: string, lang: string) {
        const user = await User.findOne({ where: { chat_id: chatId }, include: this.include });
        const updatedUser = await user?.update({ lang });

        return updatedUser;
    }

    async addToUserFolder (userId: string, folderId: string) {
        const user: any = await User.findOne({ where: { id: userId } });
        const folder: any = await Folder.findOne({ where: { id: folderId } });

        await user.addFolder(folder);
    }
}

export default new UserService();
