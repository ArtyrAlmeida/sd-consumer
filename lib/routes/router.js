"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const MessageService_1 = require("../services/MessageService");
const messageService = new MessageService_1.MessageService();
const router = (0, express_1.Router)();
exports.router = router;
router.get("/consume", () => {
    messageService.consume();
});
