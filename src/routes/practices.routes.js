import { Router } from "express";
import { 
    getPractices, 
    getPracticeById, 
    createPractice, 
    updatePractice, 
    deletePractice,
    getActivePracticeByStudent
} from "../controllers/practices.controller.js";

import { getPracticeModes } from "../controllers/practices.controller.js";

const router = Router();

// Obtener todas las prácticas
router.get('/practices', getPractices);

// Obtener una práctica por su id
router.get('/practices/:id', getPracticeById);

// Crear una nueva práctica
router.post('/practices', createPractice);

// Actualizar una práctica por su id
router.put('/practices/:id', updatePractice);

// Eliminar una práctica por su id
router.delete('/practices/:id', deletePractice);

// Obtener todas las modalidades de práctica
router.get('/practice_modes', getPracticeModes);

// Obtener la práctica activa de un estudiante
router.get('/practices/active/:userId',getActivePracticeByStudent);

export default router;
