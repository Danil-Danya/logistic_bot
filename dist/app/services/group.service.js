"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const group_model_1 = __importDefault(require("../../core/database/models/group.model"));
class GroupService {
    async creteGroup(chat) {
        if (!chat.id) {
            return;
        }
        const group = await group_model_1.default.findOne({ where: { group_id: chat.id.toString() } });
        if (group) {
            return;
        }
        const newGroup = await group_model_1.default.create({
            group_id: chat.id,
            title: chat.title,
            username: chat.username,
            type: chat.type
        });
        return newGroup;
    }
    async findByGroupId(groupId) {
        return await group_model_1.default.findOne({ where: { group_id: groupId } });
    }
    async findGroupByName(groupName) {
        return await group_model_1.default.findOne({ where: { title: groupName } });
    }
    async findAllGroups(paginate) {
        const offset = paginate.page * paginate.limit - paginate.limit;
        return await group_model_1.default.findAndCountAll({ limit: paginate.limit, offset });
    }
}
exports.default = new GroupService;
