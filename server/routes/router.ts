import { Router } from "express";

import groupRoutes from "./group.routes";
import folderRoutes from "./folder.routes";
import countriesRouter from "./country.routes";
import citiesRouter from "./city.routes";

const router = Router();

router.use(groupRoutes);
router.use(folderRoutes);
router.use(countriesRouter);
router.use(citiesRouter);

export default router;