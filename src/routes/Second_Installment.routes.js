import express from 'express';
import { secondInstallmentController } from '../controllers/Second_Installment.controller.js';

const router = express.Router();

// Ruta GET para obtener los datos
router.get('/second-installments', (req, res) =>
    secondInstallmentController.getSecondInstallments(req, res)
);

// Ruta POST para insertar un nuevo registro
router.post('/second-installments', (req, res) =>
    secondInstallmentController.createSecondInstallment(req, res)
);

export default router;