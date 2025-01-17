import { Router } from "express";
import { 
    getMenuItems, 
    getMenuItemById, 
    createMenuItem, 
    updateMenuItem, 
    deleteMenuItem 
} from "../controllers/menuItem.controller.js";

const router = Router();

// Obtener todos los items del menú
router.get('/menuitems', getMenuItems);

// Obtener un item del menú por su id
router.get('/menuitems/:id', getMenuItemById);

// Crear un nuevo item del menú
router.post('/menuitems', createMenuItem);

// Actualizar un item del menú por su id
router.put('/menuitems/:id', updateMenuItem);

// Eliminar un item del menú por su id
router.delete('/menuitems/:id', deleteMenuItem);


export default router;
