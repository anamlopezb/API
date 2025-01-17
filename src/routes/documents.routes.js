import { Router } from "express";
import { 
    getDocuments, 
    getDocumentsById, 
    createDocument, 
    updateDocument,
    deleteDocument
} from "../controllers/documents.controller.js";

const router = Router();

router.get('/documents', getDocuments);
router.get('/documents/:id', getDocumentsById);
router.post('/documents', createDocument);
router.put('/documents/:id', updateDocument);
router.delete('/documents/:id', deleteDocument);

export default router;
