import { DataTypes } from "sequelize";
import practicasDB from '../database/database.js';

export const Practice = practicasDB.define('practicas', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_postulacion:{
        type: DataTypes.INTEGER
    },
    id_estado_practica:{
        type: DataTypes.INTEGER
    },
    fecha_inicio:{
        type: DataTypes.DATE
    },
    fecha_fin:{
        type: DataTypes.DATE
    }
}, {
    timestamps: false
});
