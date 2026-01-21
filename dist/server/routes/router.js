import { Router } from "express";
import groupRoutes from "./group.routes.ts";
const router = Router();
router.use(groupRoutes);
export default router;
