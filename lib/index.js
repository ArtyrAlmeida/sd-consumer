"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const Server_1 = require("./Server");
dotenv_1.default.config();
const { MONGO_USER, MONGO_PASS, MONGO_HOST, MONGO_PORT, MONGO_NAME } = process.env;
const connectionUri = `mongodb://${MONGO_USER}:${MONGO_PASS}@${MONGO_HOST}:${MONGO_PORT}/${MONGO_NAME}?authSource=admin`;
mongoose_1.default.connect(connectionUri).then(() => {
    const server = new Server_1.Server();
    server.start();
});
