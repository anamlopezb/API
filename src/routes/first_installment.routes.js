import {Router} from "express";
import { getFirst_installmentGetter } from '../controllers/first-installment.controller.js';

const router = Router();

router.get('/first-installments', getFirst_installmentGetter);

export default router;