import { DataTypes } from "sequelize";
import practicasDB from '../database/database.js';

export const TermsAcceptance = practicasDB.define('aceptacion_terminos', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_usuario: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    aceptar_terminos: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    fecha_aceptacion: {
        type: DataTypes.DATE,
        allowNull: false
    },
    id_practica: {
        type: DataTypes.INTEGER,
        allowNull: true, // Puede ser null si no se asocia con una práctica
        references: {
          model: 'Practica', // Nombre de la tabla de prácticas
          key: 'id', // Referencia a la columna 'id' de la tabla 'Practicas'
        },
      },
}, {
    timestamps: false,
    tableName: 'aceptacion_terminos'
});
