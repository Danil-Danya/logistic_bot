import Group from '../../core/database/models/group.model.ts';
class GroupService {
    async creteGroup(chat) {
        if (!chat.id) {
            return;
        }
        const group = await Group.findOne({ where: { group_id: chat.id.toString() } });
        if (group) {
            return;
        }
        const newGroup = await Group.create({
            group_id: chat.id,
            title: chat.title,
            username: chat.username,
            type: chat.type
        });
        return newGroup;
    }
    async findByGroupId(groupId) {
        return await Group.findOne({ where: { group_id: groupId } });
    }
    async findGroupByName(groupName) {
        return await Group.findOne({ where: { title: groupName } });
    }
    async findAllGroups(paginate) {
        return await Group.findAndCountAll({ limit: paginate.limit, page: paginate.page });
    }
}
export default new GroupService;
