import {Router} from "express";
import { getPractices} from "../controllers/practices.controller.js";
import { getPracticeModes } from "../controllers/practices.controller.js";

const router = Router();

router.get('/practices', getPractices);
router.get('/practice_modes', getPracticeModes);

export default router;