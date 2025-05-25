import { Router } from "express";
import messageController from "../controllers/message.controller.js";
const routes = Router();

routes.get("/", messageController.get);
routes.get("/:id", messageController.getOne);
routes.post("/", messageController.create);
routes.delete("/:id", messageController.delete);
routes.post("/:id", messageController.update);

export default routes;
