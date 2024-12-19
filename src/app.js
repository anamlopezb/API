import express from 'express';
import cors from 'cors';
import usersRoutes from './routes/users.routes.js';
import companiesRoutes from './routes/companies.routes.js';
import postulationsRoutes from './routes/postulations.routes.js';
import practiceRoutes from './routes/practices.routes.js';
import rolRoutes from './routes/rol.routes.js';
import menuItemRoutes from './routes/menuItem.routes.js';
import teacherStudentRoutes from './routes/teacherStudent.routes.js';
import modalitiesFormRoutes from './routes/modalitiesForm.routes.js';

const app = express();

app.use(cors());
app.use(usersRoutes);
app.use(companiesRoutes);
app.use(postulationsRoutes);
app.use(practiceRoutes);
app.use(rolRoutes);
app.use(menuItemRoutes);
app.use(teacherStudentRoutes);
app.use(modalitiesFormRoutes);

export default app;