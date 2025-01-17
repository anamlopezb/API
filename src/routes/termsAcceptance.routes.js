import { Router } from "express";
import { 
    getTermsAcceptance, 
    getTermsAcceptanceById, 
    createTermsAcceptance, 
    updateTermsAcceptance, 
    deleteTermsAcceptance,
    getTermsAcceptanceByUserId
} from "../controllers/termsAcceptance.controller.js";

const router = Router();

// Obtener todos los registros de aceptación de términos
router.get('/terms-acceptance', getTermsAcceptance);

// Obtener un registro de aceptación de términos por ID
router.get('/terms-acceptance/:id', getTermsAcceptanceById);

// Crear un nuevo registro de aceptación de términos
router.post('/terms-acceptance', createTermsAcceptance);

// Actualizar un registro de aceptación de términos por ID
router.put('/terms-acceptance/update/:id_usuario', updateTermsAcceptance);

// Eliminar un registro de aceptación de términos por ID
router.delete('/terms-acceptance/:id', deleteTermsAcceptance);

// Obtener el registro de aceptación de términos por ID de usuario
router.get('/terms-acceptance/user/:id_usuario', getTermsAcceptanceByUserId);

export default router;
