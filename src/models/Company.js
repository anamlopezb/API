import { DataTypes } from "sequelize";
import practicasDB from '../database/database.js';
import { Offer } from "./Offer.js";

export const Company = practicasDB.define('empresas', {
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

