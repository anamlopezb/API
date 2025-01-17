import { DataTypes } from "sequelize";
import practicasDB from '../database/database.js';

export const ModalitiesForm = practicasDB.define('formulario_modalidad', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_modalidad: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    fecha_seleccion: {
        type: DataTypes.DATE,
        allowNull: false
    },
        id_practica: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
}, {
    timestamps: false,
    tableName: 'formulario_modalidad'
});
