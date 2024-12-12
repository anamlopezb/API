import { DataTypes } from "sequelize";
import practicasDB from '../database/database.js';
import { User } from "./User.js";

export const Scheduling = practicasDB.define('agendamientos', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_usuario:{
        type: DataTypes.INTEGER
    },
    tipo_encuetro:{
        type: DataTypes.STRING
    },
    fecha_encuentro:{
        type: DataTypes.DATE
    },
    hora_encuentro:{
        type: DataTypes.DATE
    },
    nombre:{
        type: DataTypes.STRING
    }
}, {
    timestamps: false
});