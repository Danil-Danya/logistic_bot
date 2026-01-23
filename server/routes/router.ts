import { Router } from "express";
import groupRoutes from "./group.routes";
import folderRoutes from "./folder.routes";

const router = Router();

router.use(groupRoutes);
router.use(folderRoutes)

export default router;