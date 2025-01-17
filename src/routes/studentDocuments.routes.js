import { Router } from "express";
import { 
    getStudentDocuments,
    getStudentDocumentsById,
    createStudentDocuments,
    updateStudentDocuments,
    deleteStudentDocuments
} from "../controllers/studentDocuments.controller.js";

const router = Router();
// Ruta para obtener todos los documents parametrizados
router.get('/student-documents', getStudentDocuments);

// Ruta para obtener un documento parametrizado por ID
router.get('/student-documents/:id', getStudentDocumentsById);

// Ruta para crear un nuevo documento parametrizado
router.post('/student-documents', createStudentDocuments);

// Ruta para actualizar un documento parametrizado por ID
router.put('/student-documents/:id', updateStudentDocuments);

// Ruta para eliminar un documento parametrizado por ID
router.delete('/student-documents/:id', deleteStudentDocuments);


export default router;
