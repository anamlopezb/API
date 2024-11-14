import { DataTypes } from "sequelize";
import practicasDB from '../database/database.js';
import { Company } from './Company.js'; 
import { PracticeLevel } from "./PracticeLevel.js";
import { PracticeMode } from "./PracticeMode.js";


export const Offer = practicasDB.define('ofertas', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_empresa:{
        type: DataTypes.INTEGER
    },
    id_nivel_practica:{
        type: DataTypes.INTEGER
    },
    id_modalidad_practica:{
        type: DataTypes.INTEGER
    }
}, {
    timestamps: false
});

