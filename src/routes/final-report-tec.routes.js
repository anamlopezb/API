import { Router } from "express";
import { getFinalReports, createFinalReport, getFinalReportById } from '../controllers/final-report-tec.controller.js';

const router = Router();

// Ruta para obtener los datos
router.get("/final-report", getFinalReports);
router.post('/final-report', createFinalReport);
router.get('/final-report/:id', getFinalReportById);

export default router;