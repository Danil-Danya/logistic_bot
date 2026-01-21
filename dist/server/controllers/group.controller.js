import groupService from "../services/group.service.ts";
class GroupController {
    async getAll(req, res, next) {
        try {
            const page = Number(req.query.page) || 1;
            const limit = Number(req.query.limit) || 10;
            const where = req.query.where;
            const whereField = req.query.where_field;
            const orderBy = req.query.order_by;
            const orderType = req.query.order_type;
            const search = req.query.search;
            const searchField = req.query.search_field;
            const paginate = { page, limit };
            const filters = { where, whereField, orderBy, orderType, search, searchField };
            const groups = await groupService.getAllGroups(paginate, filters);
            return res.status(200).json(groups);
        }
        catch (error) {
            next(error);
        }
    }
    async getById(req, res, next) {
        try {
            const id = req.params.id;
            const group = await groupService.getGroupById(id);
            return res.status(200).json(group);
        }
        catch (error) {
            next(error);
        }
    }
    async delete(req, res, next) {
        try {
            const id = req.params.id;
            const deletedMessage = await groupService.deleteGroup(id);
            return res.status(200).json(deletedMessage);
        }
        catch (error) {
            next(error);
        }
    }
    async update(req, res, next) {
        try {
            const id = req.params.id;
            const title = req.body.name;
            const user_name = req.body.user_name;
            const type = req.body.type;
            const updatedGroup = await groupService.updateGroup(id, { title, user_name, type });
            return res.status(200).json(updatedGroup);
        }
        catch (error) {
            next(error);
        }
    }
    async edit(req, res, next) {
        try {
            const id = req.params.id;
            const title = req.body.name;
            const user_name = req.body.user_name;
            const type = req.body.type;
            const editedGroup = await groupService.editGroup(id, { title, user_name, type });
            return res.status(200).json(editedGroup);
        }
        catch (error) {
            next(error);
        }
    }
}
export default new GroupController();
