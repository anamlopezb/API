import { DataTypes } from "sequelize";
import practicasDB from '../database/database.js';
import { User } from "./User.js";
import { PracticeMode } from "./PracticeMode.js";

export const UserPracticeMode = practicasDB.define('usuarios', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_usuario:{
        type: DataTypes.INTEGER
    },
    id_modalidad_practica:{
        type: DataTypes.INTEGER
    }
}, {
    timestamps: false
});
