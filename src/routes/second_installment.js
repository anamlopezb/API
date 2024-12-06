import express from 'express';
import { secondInstallmentController } from '../controllers/SecondInstallmentController.js';

const router = express.Router();

router.get('/second-installments', (req, res) =>
    secondInstallmentController.getSecondInstallments(req, res)
);

export default router;
