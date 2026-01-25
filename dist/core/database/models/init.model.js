"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TariffToUser = exports.FolderToUser = exports.FolderToGroups = exports.Role = exports.Tariff = exports.Folder = exports.Message = exports.Group = exports.User = void 0;
const sequelize_1 = __importDefault(require("../../../plugins/sequelize"));
const user_model_1 = __importDefault(require("./user.model"));
exports.User = user_model_1.default;
const roles_model_1 = __importDefault(require("./roles.model"));
exports.Role = roles_model_1.default;
const group_model_1 = __importDefault(require("./group.model"));
exports.Group = group_model_1.default;
const message_model_1 = __importDefault(require("./message.model"));
exports.Message = message_model_1.default;
const folders_model_1 = __importDefault(require("./folders.model"));
exports.Folder = folders_model_1.default;
const tariffs_model_1 = __importDefault(require("./tariffs.model"));
exports.Tariff = tariffs_model_1.default;
const countries_model_1 = __importDefault(require("./countries.model"));
const cities_model_1 = __importDefault(require("./cities.model"));
const folderToGroups_model_1 = __importDefault(require("./folderToGroups.model"));
exports.FolderToGroups = folderToGroups_model_1.default;
const folderToUser_model_1 = __importDefault(require("./folderToUser.model"));
exports.FolderToUser = folderToUser_model_1.default;
const tariffToUser_model_1 = __importDefault(require("./tariffToUser.model"));
exports.TariffToUser = tariffToUser_model_1.default;
sequelize_1.default.sync();
group_model_1.default.hasMany(message_model_1.default, {
    foreignKey: 'group_id',
    sourceKey: 'group_id',
    as: 'messages',
});
message_model_1.default.belongsTo(group_model_1.default, {
    foreignKey: 'group_id',
    targetKey: 'group_id',
    as: 'group',
});
folders_model_1.default.belongsToMany(group_model_1.default, {
    through: folderToGroups_model_1.default,
    foreignKey: 'folder_id',
    otherKey: 'group_id',
    as: 'groups',
});
group_model_1.default.belongsToMany(folders_model_1.default, {
    through: folderToGroups_model_1.default,
    foreignKey: 'group_id',
    otherKey: 'folder_id',
    as: 'folders',
});
folders_model_1.default.belongsToMany(user_model_1.default, {
    through: folderToUser_model_1.default,
    foreignKey: 'folder_id',
    otherKey: 'user_id',
    as: 'users',
});
user_model_1.default.belongsToMany(folders_model_1.default, {
    through: folderToUser_model_1.default,
    foreignKey: 'user_id',
    otherKey: 'folder_id',
    as: 'folders',
});
tariffs_model_1.default.belongsToMany(user_model_1.default, {
    through: tariffToUser_model_1.default,
    foreignKey: 'tariff_id',
    otherKey: 'user_id',
    as: 'users',
});
user_model_1.default.belongsToMany(tariffs_model_1.default, {
    through: tariffToUser_model_1.default,
    foreignKey: 'user_id',
    otherKey: 'tariff_id',
    as: 'tariffs',
});
countries_model_1.default.hasMany(cities_model_1.default, {
    foreignKey: 'country_id',
    as: 'cities'
});
cities_model_1.default.belongsTo(countries_model_1.default, {
    foreignKey: 'country_id',
    as: 'country'
});
