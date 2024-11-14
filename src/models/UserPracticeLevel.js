import { DataTypes } from "sequelize";
import practicasDB from '../database/database.js';
import { PracticeLevel } from "./PracticeLevel.js";
import { User } from "./User.js";

export const UserPracticeLevel = practicasDB.define('usuarios', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_usuario:{
        type: DataTypes.INTEGER
    },
    id_nivel_practica:{
        type: DataTypes.INTEGER
    }
}, {
    timestamps: false
});