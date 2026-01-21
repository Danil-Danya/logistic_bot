import { InlineKeyboard } from "grammy";
import groupService from "../services/group.service";

const generateGroupKeyboard = async () => {
    const keyboard = new InlineKeyboard().text("🔎 По всем группам", "search_all").row();

    const groups = await groupService.findAllGroups({ page: 1, limit: 10 });    

    for (const group of groups.rows) {
        keyboard.text(group.dataValues.title || group.dataValues.group_id).row();
    }

    return keyboard;
}

export default generateGroupKeyboard;