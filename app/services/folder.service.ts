import FolderModel from "../../core/database/models/folders.model";

class FolderService {
    async getAllFolders () {
        const folders = await FolderModel.findAndCountAll({
            order: [["created_at", "ASC"]]
        });
        return folders;
    }

    async getFolderById (id: string) {
        const folder = await FolderModel.findByPk(id);
        return folder;
    }
}

export default new FolderService();