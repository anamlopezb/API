import {Router} from "express";
import { getPostulations } from "../controllers/postulations.controller.js";

const router = Router();

router.get('/postulations', getPostulations);

export default router;