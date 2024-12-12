import {Router} from "express";
import { getThirdInstallmentsGetter } from "../controllers/Third_installment.controller";
const router = Router();

router.get('/third-installments', getThirdInstallmentsGetter);

export default router;
