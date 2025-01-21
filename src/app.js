import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

import usersRoutes from './routes/users.routes.js';
import companiesRoutes from './routes/companies.routes.js';
import postulationsRoutes from './routes/postulations.routes.js';
import practiceRoutes from './routes/practices.routes.js';
import rolRoutes from './routes/rol.routes.js';
import menuItemRoutes from './routes/menuItem.routes.js';
import teacherStudentRoutes from './routes/teacherStudent.routes.js';
import modalitiesFormRoutes from './routes/modalitiesForm.routes.js';
import termsAcceptanceRoutes from './routes/termsAcceptance.routes.js';
import documentsRoutes from './routes/documents.routes.js';
import studentDocumentsRoutes from './routes/studentDocuments.routes.js';
import documentFormalizationRoutes from './routes/documentFormalization.routes.js';
import releaseRoutes from './routes/release.routes.js';
import releasePracticeRoutes from './routes/releasePractice.routes.js';
import generalSchemeFormRoutes from './routes/generalSchemeForm.routes.js';
import practiceReleaseDocumentRoutes from './routes/practiceReleaseDocument.routes.js';
import releaseDocumentRoutes from './routes/documentRelease.routes.js';

// Configuración de __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuración de Express
const app = express();

// Configuración de CORS
app.use(cors());

// Configuración de Body Parser
app.use(express.json());

// Configuración de Rutas estáticas para la carpeta uploads
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Rutas
app.use(usersRoutes);
app.use(companiesRoutes);
app.use(postulationsRoutes);
app.use(practiceRoutes);
app.use(rolRoutes);
app.use(menuItemRoutes);
app.use(teacherStudentRoutes);
app.use(modalitiesFormRoutes);
app.use(termsAcceptanceRoutes);
app.use(documentsRoutes); 
app.use(studentDocumentsRoutes);
app.use(documentFormalizationRoutes)
app.use(releaseRoutes);
app.use(releasePracticeRoutes);
app.use(generalSchemeFormRoutes);
app.use(practiceReleaseDocumentRoutes);
app.use(releaseDocumentRoutes);


export default app;