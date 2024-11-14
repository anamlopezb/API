import { DataTypes } from "sequelize";
import practicasDB from '../database/database.js';

export const PracticeMode = practicasDB.define('modalidades_practicas', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre:{
        type: DataTypes.STRING
    }
}, {
    timestamps: false
});

