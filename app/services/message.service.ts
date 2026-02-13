import Message from '../../core/database/models/message.model';
import deleteDuplicates from 'app/utils/delete-duplicates';
import { Op, literal } from 'sequelize';

const buildLikeAnyCondition = (field: string, tokens: string[]) => {
    const patterns = tokens.map(t => `%${t.replace(/%/g, "\\%").replace(/_/g, "\\_")}%`);

    if (!patterns.length) {
        return null;
    }

    const sqlArray = patterns.map(p => `'${p.replace(/'/g, "''")}'`).join(",");

    return literal(`"${field}" ILIKE ANY(ARRAY[${sqlArray}])`);
}

class MessageService {
    async createMessage (data: any) {
        const executeMessage = await Message.findOne({ where: { text: data.text } });
        if (executeMessage) {
            console.log('Сообщение с данным текстом уже существует');
            return;
        }

        const newMessage = await Message.create(data);
        return newMessage;
    }

    async searchMessages(originTokens: string[], destinationTokens: string[]) {
        const originCond = buildLikeAnyCondition("text", originTokens);
        const destCond = buildLikeAnyCondition("text", destinationTokens);

        if (!originCond || !destCond) {
            return { rows: [], count: 0 };
        }

        const messages = await Message.findAll({
            where: {
                [Op.and]: [originCond, destCond]
            },
            limit: 150,
        });

        const uniqueMessages = deleteDuplicates(messages);

        return uniqueMessages;
    }
}

export default new MessageService();