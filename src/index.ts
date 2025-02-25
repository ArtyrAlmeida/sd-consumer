import dotenv from "dotenv";
import mongoose from "mongoose";
import { Server } from "./Server";

dotenv.config();

const { MONGO_USER, MONGO_PASS, MONGO_HOST, MONGO_PORT, MONGO_NAME } = process.env;

const connectionUri = `mongodb://${MONGO_USER}:${MONGO_PASS}@${MONGO_HOST}:${MONGO_PORT}/${MONGO_NAME}?authSource=admin`;

mongoose.connect(connectionUri).then(() => {
    const server = new Server();
    server.start();
})