import { DataTypes } from "sequelize";
import practicasDB from '../database/database.js';
import { Manager_practices } from "./manager-practices.js";


export const First_installment = practicasDB.define('primera_entrega', {
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