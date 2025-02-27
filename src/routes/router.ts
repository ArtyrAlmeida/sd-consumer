import { Router } from "express";
import { MessageService } from "../services/MessageService";
import { EmmitedMessage } from "../interfaces";

const messageService = new MessageService();

const router = Router();

router.get("/consume", (req, res) => {
    messageService.consume();
    res.status(200).json({ message: "Started consuming" });
})

router.post("/emmit", async (req, res) => {
    const reqBody: EmmitedMessage = req.body;
    const emmit = await messageService.emmitToQueue(reqBody.message);
    
    if(emmit) {
        res.status(200).json({ message: `Message ${req.body.message} successfully emmited to the queue`});
        return;
    }

    res.status(400).json({ message: `An error occurred`});
    return;
})

export { router };