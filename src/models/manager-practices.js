import { DataTypes } from "sequelize";
import practicasDB from '../database/database.js';
import { User } from "./User.js";

export const Manager_practices = practicasDB.define('gestion_practica', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_usuario:{
        type: DataTypes.INTEGER
    },
    nombre:{
        type: DataTypes.STRING
    }
}, {
    timestamps: false
});