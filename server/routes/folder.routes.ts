import { Router } from "express";
import folderController from "../controllers/folder.controller";

const router = Router();

router.post("/folders", folderController.create);
router.post("/folders/add-group", folderController.addGroup);
router.put("/folders/:id", folderController.update);
router.patch("/folders/:id", folderController.edit);
router.delete("/folders/:id", folderController.delete);
router.get("/folders", folderController.getAll);
router.get("/folders/:id", folderController.getById);

export default router;