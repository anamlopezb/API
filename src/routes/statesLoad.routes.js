import { Router } from "express";
import {
    getStatesLoad,
    getStatesLoadById,
    createStatesLoad,
    updateStatesLoad,
    deleteStatesLoad        
}   from "../controllers/statesLoad.controller.js"; 

const router = Router();
// Ruta para obtener todos los documents parametrizados
router.get('/states-load', getStatesLoad);

// Ruta para obtener un documento parametrizado por ID
router.get('/states-load/:id', getStatesLoadById);

// Ruta para crear un nuevo documento parametrizado
router.post('/states-load', createStatesLoad);

// Ruta para actualizar un documento parametrizado por ID
router.put('/states-load/:id', updateStatesLoad);

// Ruta para eliminar un documento parametrizado por ID
router.delete('/states-load/:id', deleteStatesLoad);


export default router;
