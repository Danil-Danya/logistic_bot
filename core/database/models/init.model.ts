import sequelize from "../../../plugins/sequelize.ts";

import User from "./user.model.ts";
import Group from "./group.model.ts";
import Message from "./message.model.ts";


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

export {
    User,
    Group,
    Message
}