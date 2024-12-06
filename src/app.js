import express from 'express';
import cors from 'cors';
import usersRoutes from './routes/users.routes.js';
import companiesRoutes from './routes/companies.routes.js';
import postulationsRoutes from './routes/postulations.routes.js';
import practiceRoutes from './routes/practices.routes.js';
import secondInstallmentRoutes from './routes/secondInstallments.js';




const app = express();

app.use(cors());
app.use(usersRoutes);
app.use(companiesRoutes);
app.use(postulationsRoutes);
app.use(practiceRoutes);
app.use(secondInstallmentRoutes);

export default app;