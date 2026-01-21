import Message from '../../core/database/models/message.model.ts';
class MessageService {
    async createMessage(data) {
        const newMessage = await Message.create(data);
        return newMessage;
    }
}
export default new MessageService;
