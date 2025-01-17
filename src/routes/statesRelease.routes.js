import { Router } from "express";
import {
    getStatesRelease,
    getStatesReleaseById,
    createStatesRelease,
    updateStatesRelease,
    deleteStatesRelease
} from "../controllers/stateRelease.controller.js";

const router = Router();
// Ruta para obtener todos los documents parametrizados
router.get('/states-release', getStatesRelease);

// Ruta para obtener un documento parametrizado por ID
router.get('/states-release/:id', getStatesReleaseById);

// Ruta para crear un nuevo documento parametrizado
router.post('/states-release', createStatesRelease);

// Ruta para actualizar un documento parametrizado por ID
router.put('/states-release/:id', updateStatesRelease);

// Ruta para eliminar un documento parametrizado por ID
router.delete('/states-release/:id', deleteStatesRelease);


export default router;
