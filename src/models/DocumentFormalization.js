import { DataTypes } from "sequelize";
import practicasDB from '../database/database.js';

export const DocumentFormalization = practicasDB.define('documentos_formalizacion', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id_practica: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    documento: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ruta_documento: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    id_estado_entregas: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    fecha_cargue: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    id_estado_cargues: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    observaciones: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    tamano_documento: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    formato_documento: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    fecha_actualizacion: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    version_documento: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    id_documentos_estudiante: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {
    tableName: 'documentos_formalizacion',
    timestamps: false,
  });
  

