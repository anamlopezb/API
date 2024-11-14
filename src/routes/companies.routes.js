import {Router} from "express";
import { getCompanies } from "../controllers/companies.controller.js";

const router = Router();

router.get('/companies', getCompanies);

export default router;