import { Router } from "express";
import countriesController from "server/controllers/countries.controller";

const router = Router();

router.post('/countries', countriesController.create);

router.put('/countries/:id', countriesController.update);
router.patch('/countries/:id', countriesController.edit);

router.get('/countries', countriesController.getAll);
router.get('/countries/:id', countriesController.getById);

router.delete('/countries/:id', countriesController.delete);

export default router;