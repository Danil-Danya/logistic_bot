import { Router } from "express";
import citiesController from "server/controllers/cities.controller";

const router = Router();

router.post('/cities', citiesController.create);

router.put('/cities/:id', citiesController.update);
router.patch('/cities/:id', citiesController.edit);

router.get('/cities', citiesController.getAll);
router.get('/cities/:id', citiesController.getById);

router.delete('/cities/:id', citiesController.delete);

export default router;