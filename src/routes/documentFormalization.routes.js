import { Router } from 'express';
import upload from '../config/multerConfig.js';

import {
    getDocumentFormalization,
    getDocumentFormalizationById,
    updateFormalizationDocumentRecord,
    updateDocumentFormalization,
    deleteDocumentFormalization,
    getDocumentsByPractice,
    createFormalizationDocumentRecord,
    deleteFormalizationDocumentRecord,
    viewFormalizationDocument
} from '../controllers/documentFormalization.controller.js';

const router = Router();

// Rutas para manejar la formalización de documentos
router.get('/document-formalization', getDocumentFormalization);
router.get('/document-formalization/:id', getDocumentFormalizationById);

// Ruta para cargar archivos y crear la formalización de documento
router.put(
  '/updateDocumentFormalization/:id',  // Cambié la ruta para que reciba el id del registro
  upload.single('documento'),  // Asegúrate de que el archivo se cargue correctamente
  updateFormalizationDocumentRecord  // El controlador que maneja la actualización
);


router.put('/document-formalization/:id', updateDocumentFormalization);
router.delete('/document-formalization/:id', deleteDocumentFormalization);
router.get('/documents-practice/:idPractice', getDocumentsByPractice);
router.post('/fomalization-documents-record/:idPractice', createFormalizationDocumentRecord);
router.delete('/formalization/:id', deleteFormalizationDocumentRecord);

// Ruta para ver el archivo de formalización de documento
router.get('/view-formalization-document/:id', viewFormalizationDocument);  // Nueva ruta para ver el archivo



export default router;
