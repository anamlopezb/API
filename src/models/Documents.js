import { DataTypes } from "sequelize";
import practicasDB from '../database/database.js';

export const Documents = practicasDB.define('documentos_practica', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre_documento: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tipo_documento: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  estado_documento: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  ruta_documento: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'documentos_practica',
  timestamps: false
});

