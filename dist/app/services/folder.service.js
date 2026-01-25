"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const folders_model_1 = __importDefault(require("../../core/database/models/folders.model"));
class FolderService {
    async getAllFolders() {
        const folders = await folders_model_1.default.findAndCountAll({
            order: [["created_at", "ASC"]]
        });
        return folders;
    }
    async getFolderById(id) {
        const folder = await folders_model_1.default.findByPk(id);
        return folder;
    }
}
exports.default = new FolderService();
