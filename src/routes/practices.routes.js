import {Router} from "express";
import { getPractices} from "../controllers/practices.controller.js";

const router = Router();

router.get('/practices', getPractices);

export default router;