import Message from '../../core/database/models/message.model';
import { Op } from 'sequelize';

class MessageService {
    async createMessage (data: any) {
        const newMessage = await Message.create(data);
        return newMessage;
    }

    async searchMessages(originTokens: string[], destinationTokens: string[]) {
        console.log(originTokens, destinationTokens);
        

        const messages = await Message.findAll({
            where: {
                [Op.or]: [
                    { [Op.or]: originTokens.map(t => ({ text: { [Op.iLike]: `%${t}%` } })) },
                    { [Op.or]: destinationTokens.map(t => ({ text: { [Op.iLike]: `%${t}%` } })) }
                ]
            },
            limit: 10,
            // order: [["created_at", "DESC"]],
        });
        
        return messages;
    }
}

export default new MessageService;