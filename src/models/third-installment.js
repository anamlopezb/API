import { DataTypes } from "sequelize";
import practicasDB from '../database/database.js';
import { Manager_practices } from "./manager_practices.js";

export const Third_installment = practicasDB.define('tercera_entrega', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_gestion_practicas:{
        type: DataTypes.INTEGER
    },
    nombre:{
        type: DataTypes.STRING
    }
}, {
    timestamps: false
});