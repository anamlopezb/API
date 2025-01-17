import multer from 'multer';
import path from 'path';
import fs from 'fs';

// Configuración de almacenamiento de Multer
const uploadPath = path.join(new URL('.', import.meta.url).pathname, '../uploads');
if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadPath);  // Carpeta donde se guardarán los archivos
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1E9)}${path.extname(file.originalname)}`;
    cb(null, uniqueSuffix);  // Nombre único para evitar colisiones
  }
});

// Configuración de multer
const upload = multer({
  storage,
  limits: { fileSize: 2 * 1024 * 1024 },  // Tamaño máximo de archivo: 2MB
  fileFilter: (req, file, cb) => {
    const fileTypes = /pdf/;  // Solo archivos PDF
    const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = fileTypes.test(file.mimetype);

    if (extname && mimetype) {
      return cb(null, true);
    } else {
      cb(new Error('Solo se permiten archivos en formato PDF.'));
    }
  }
});

export default upload;