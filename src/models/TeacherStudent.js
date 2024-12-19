import { DataTypes } from "sequelize";
import practicasDB from '../database/database.js';

export const TeacherStudent = practicasDB.define('docente_estudiante', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_docente: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'usuarios', // nombre de la tabla donde se encuentra el docente
            key: 'id' // clave primaria de la tabla 'usuarios'
        }
    },
    id_estudiante: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'usuarios', // nombre de la tabla donde se encuentra el estudiante
            key: 'id' // clave primaria de la tabla 'usuarios'
        }
    }
}, {
    timestamps: false,
    tableName: 'docente_estudiante'
});
