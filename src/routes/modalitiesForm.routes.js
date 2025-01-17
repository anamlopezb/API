import { Router } from "express";
import { getModalitiesForm, getModalitiesFormById, createModalitiesForm, updateModalitiesForm, deleteModalitiesForm, getFormStatus} from "../controllers/modalitiesForm.controller.js";
const router = Router();

router.get('/modalities-form', getModalitiesForm);
router.get('/modalities-form/:id', getModalitiesFormById);
router.post('/modalities-form', createModalitiesForm);
router.put('/modalities-form/:id', updateModalitiesForm);
router.delete('/modalities-form/:id', deleteModalitiesForm);
router.get('/modalities-form/status/:practiceId', getFormStatus);


export default router;
