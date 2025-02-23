import mongoose from "mongoose"
import { IMessage } from "../interfaces";

const Schema = mongoose.Schema;

const messageSchema = new Schema<IMessage>({
    message: {
        type: String,
        required: true
    }
}, { timestamps: true });

const Message = mongoose.model("messages", messageSchema);

export default Message;