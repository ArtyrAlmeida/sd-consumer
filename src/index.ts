import dotenv from "dotenv";
import mongoose from "mongoose";
import { Server } from "./Server";

dotenv.config();

mongoose.connect(process.env.MONGO_URI as string).then(() => {
    const server = new Server();
    server.start();
})