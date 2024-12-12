import {Router} from "express";
import { getFinal_reportGetter } from "../controllers/final-report-tec.controller";
const router = Router();

router.get('/Final-report', getFinal_reportGetter);

export default router;
