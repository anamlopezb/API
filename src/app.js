import express from 'express';
import cors from 'cors';
import usersRoutes from './routes/users.routes.js';
import companiesRoutes from './routes/companies.routes.js';
import postulationsRoutes from './routes/postulations.routes.js';
import practiceRoutes from './routes/practices.routes.js';
import rolRoutes from './routes/rol.routes.js';
import menuItemRoutes from './routes/menuItem.routes.js';
import teacherStudentRoutes from './routes/teacherStudent.routes.js';
//import modalitiesFormRoutes from './routes/modalitiesForm.routes.js';
import Final_reportRoutes from './routes/final-report-tec.routes.js'
import first_installmentRoutes from './routes/first_installment.routes.js'
import secondInstallmentRoutes from './routes/Second_Installment.routes.js'
import Third_installmentroutes  from './routes/third_installment.routes.js';

const app = express();

app.use(express.json()); // Agrega esta línea

// Middleware para habilitar datos codificados en la URL (opcional, pero útil)
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use(usersRoutes);
app.use(companiesRoutes);
app.use(postulationsRoutes);
app.use(practiceRoutes);
app.use(rolRoutes);
app.use(menuItemRoutes);
app.use(teacherStudentRoutes);
//app.use(modalitiesFormRoutes);
app.use(Final_reportRoutes);
app.use(Third_installmentroutes);
app.use(secondInstallmentRoutes)
app.use(first_installmentRoutes);
export default app;