import { IMessage } from "../interfaces";
import Message from "../models/Message";

export class MessageRepository {
    async create(message: IMessage) {
        const newMessage = await Message.create(message);
        return newMessage;
    }
}