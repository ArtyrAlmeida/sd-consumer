import { Router } from "express";
import { MessageService } from "../services/MessageService";
import { EmmitedMessage } from "../interfaces";

const messageService = new MessageService();

const router = Router();

router.get("/consume", () => {
    messageService.consume();
})

router.post("/emmit", async (req) => {
    const reqBody: EmmitedMessage = await req.body()
    messageService.emmitToQueue(reqBody.message);
})

export { router };