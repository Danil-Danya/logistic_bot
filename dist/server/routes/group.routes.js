import { Router } from 'express';
import groupController from '../controllers/group.controller.ts';
const router = Router();
router.get('/groups', groupController.getAll);
router.get('/groups/:id', groupController.getById);
router.delete('/groups/:id', groupController.delete);
router.put('/groups/:id', groupController.update);
router.patch('/groups/:id', groupController.edit);
export default router;
