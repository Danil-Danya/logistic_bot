import sequelize from "../../../plugins/sequelize";

import User from "./user.model";
import Role from "./roles.model";
import Group from "./group.model";
import Message from "./message.model";
import Folder from "./folders.model";
import Tariff from "./tariffs.model";

import FolderToGroups from "./FolderToGroups.model";
import FolderToUser from "./folderToUser.model";
import TariffToUser from "./tariffToUser.model";


sequelize.sync();

Group.hasMany(Message, {
    foreignKey: 'group_id',   
    sourceKey: 'group_id',    
    as: 'messages',
});

Message.belongsTo(Group, {
    foreignKey: 'group_id',   
    targetKey: 'group_id', 
    as: 'group',
});

Folder.belongsToMany(Group, {
    through: FolderToGroups,
    foreignKey: 'folder_id',
    otherKey: 'group_id',
    as: 'groups',
});

Group.belongsToMany(Folder, {
    through: FolderToGroups,
    foreignKey: 'group_id',
    otherKey: 'folder_id',
    as: 'folders',
});

Folder.belongsToMany(User, {
    through: FolderToUser,
    foreignKey: 'folder_id',
    otherKey: 'user_id',
    as: 'users',
});

User.belongsToMany(Folder, {
    through: FolderToUser,
    foreignKey: 'user_id',
    otherKey: 'folder_id',
    as: 'folders',
});

Tariff.belongsToMany(User, {
    through: TariffToUser,
    foreignKey: 'tariff_id',
    otherKey: 'user_id',
    as: 'users',
});

User.belongsToMany(Tariff, {
    through: TariffToUser,
    foreignKey: 'user_id',
    otherKey: 'tariff_id',
    as: 'tariffs',
});


export {
    User,
    Group,
    Message,
    Folder,
    Tariff,
    Role,
    FolderToGroups,
    FolderToUser,
    TariffToUser,
}