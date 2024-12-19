import { Router } from "express";
import { getUser, getUserById, createUser, updateUser, deleteUser, getUserByRol, getRoleByUserId } from "../controllers/users.controller.js";

const router = Router();

// Obtener todos los users
router.get('/users', getUser);

// Obtener un usuario por su id
router.get('/users/:id', getUserById);

// Obtener el rol de un usuario por su id
router.get('/users/:id/role', getRoleByUserId);

// Crear un nuevo usuario
router.post('/users', createUser);

// Actualizar un usuario existente
router.put('/users/:id', updateUser);

// Eliminar un usuario
router.delete('/users/:id', deleteUser);

// Obtener los users por su rol
router.get('/users/rol/:rolId', getUserByRol);

export default router;
