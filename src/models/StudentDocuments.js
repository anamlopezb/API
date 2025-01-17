import { DataTypes } from "sequelize";
import practicasDB from '../database/database.js';

export const StudentDocuments = practicasDB.define('documentos_estudiante', {
  id_documento: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre_documento: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descripcion_documento: {
    type: DataTypes.TEXT,
    allowNull: true, // Puede ser opcional
  },
  tipo_documento: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  estado_documento: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  fecha_creacion: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW, // Valor por defecto es la fecha y hora actual
  },
  fecha_modificacion: {
    type: DataTypes.DATE,
    allowNull: true, // Puede ser nulo hasta que se modifique
  },
  archivo_requerido: {
    type: DataTypes.BOOLEAN,
    defaultValue: true, // Por defecto es obligatorio
  }
}, {
  tableName: 'documentos_estudiante',
  timestamps: false, // No se usarán las columnas createdAt y updatedAt
});
