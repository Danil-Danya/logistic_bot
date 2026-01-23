import { PaginateDTO } from 'server/dtos/paginate.dto';
import Group from '../../core/database/models/group.model';

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
        return await Group.findOne({ where: { group_id: groupId } });
    }

    async findGroupByName(groupName: string) {
        return await Group.findOne({ where: { title: groupName } });
    }

    async findAllGroups(paginate: PaginateDTO) {
        const offset = paginate.page * paginate.limit - paginate.limit;
        return await Group.findAndCountAll({ limit: paginate.limit, offset });
    }
}

export default new GroupService;