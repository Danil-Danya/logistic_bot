import Group from '../../core/database/models/group.model.ts';

class GroupService {
    async creteGroup (chat: any) {
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
        })

        return newGroup;
    }

    async findByGroupId(groupId: string) {
        return Group.findOne({ where: { group_id: groupId } });
    }
}

export default new GroupService;