import { DataTypes } from "sequelize";
import practicasDB from '../database/database.js';

export const PracticeReleaseDocument  = practicasDB.define('documentos_entregas_practicas', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre_documento: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descripcion_documento: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    tipo_documento: {
        type: DataTypes.STRING,
        allowNull: false
    },
    estado_documento: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fecha_creacion: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    fecha_modificacion: {
        type: DataTypes.DATE,
        allowNull: true
    },
    archivo_requerido: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    id_entrega: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    timestamps: false,
    tableName: 'documentos_entregas_practicas'
});
