import { Context } from "grammy";
import { User } from "../../core/database/models/init.model";

class UserService {
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

export default new UserService();
