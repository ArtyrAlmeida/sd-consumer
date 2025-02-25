"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const router_1 = require("./routes/router");
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.app.use('/api', router_1.router);
    }
    start() {
        this.app.listen(3030, () => console.log("Running"));
    }
}
exports.Server = Server;
