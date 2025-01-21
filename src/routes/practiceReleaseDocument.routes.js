import { Router } from "express";
import {
    getPracticeReleaseDocument,
    getPracticeReleaseDocumentById,
    createPracticeReleaseDocument,
    updatePracticeReleaseDocument,
    deletePracticeReleaseDocument
} from "../controllers/practiceReleaseDocument.controller.js";

const router = Router();

// Ruta para obtener todos los documentos de entrega
router.get('/practice-release-document', getPracticeReleaseDocument);

// Ruta para obtener un documento de entrega por ID
router.get('/practice-release-document/:id', getPracticeReleaseDocumentById);

// Ruta para crear un nuevo documento de entrega
router.post('/practice-release-document', createPracticeReleaseDocument);

// Ruta para actualizar un documento de entrega por ID
router.put('/practice-release-document/:id', updatePracticeReleaseDocument);

// Ruta para eliminar un documento de entrega por ID
router.delete('/practice-release-document/:id', deletePracticeReleaseDocument);

export default router;
