import express, { Express } from "express";
import { router } from "./routes/router";

export class Server {
    private app: Express;

    constructor() {
        this.app = express();
        this.app.use(express.json());
        this.app.use('/api', router);
    }

    start() {
        this.app.listen(3030, () => console.log("Running"));
    }
}