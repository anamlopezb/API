import { DataTypes } from "sequelize";
import practicasDB from '../database/database.js';
import { Scheduling } from "./scheduling.js";

export const Meetings = practicasDB.define('agendamientos', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_agendamientos:{
        type: DataTypes.INTEGER
    },
    nombre:{
        type: DataTypes.STRING
    }
}, {
    timestamps: false
});