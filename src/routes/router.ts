import { Router } from "express";
import { MessageService } from "../services/MessageService";

const messageService = new MessageService();

const router = Router();

router.get("/consume", () => {
    messageService.consume();
})

export { router };