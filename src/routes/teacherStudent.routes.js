// routes/docenteEstudiantes.routes.js
import { Router } from "express";
import { getTeacherStudents } from "../controllers/teacherStudent.controller.js";
const router = Router();

// Ruta para obtener los estudiantes asociados a un docente específico
router.get('/teacher-students/:id_docente', getTeacherStudents);

export default router;

