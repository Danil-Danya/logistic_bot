import Message from '../../core/database/models/message.model';

class MessageService {
    async createMessage (data: any) {
        const newMessage = await Message.create(data);
        return newMessage;
    }
}

export default new MessageService;