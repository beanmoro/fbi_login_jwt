import { Router } from 'express';
import { UserController } from '../controllers/users.controller.js';

const router = Router();

router.post('/', UserController.login);

export default router;