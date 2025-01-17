import { Router } from "express";
import { getRoles, getRolById, createRol, updateRol, deleteRol, getMenuItemsByRol } from "../controllers/rol.controller.js";

const router = Router();

// Obtener todos los roles
router.get('/roles', getRoles);

// Obtener un rol por su id
router.get('/roles/:id', getRolById);

// Crear un nuevo rol
router.post('/roles', createRol);

// Actualizar un rol existente
router.put('/roles/:id', updateRol);

// Eliminar un rol
router.delete('/roles/:id', deleteRol);

// Obtener los MenuItem por Rol
router.get('/roles/:rolId/menuitems', getMenuItemsByRol);

export default router;
