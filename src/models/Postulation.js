import { DataTypes } from "sequelize";
import practicasDB from '../database/database.js';

export const Postulation = practicasDB.define('postulaciones', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_usuario:{
        type: DataTypes.INTEGER
    },
    id_oferta:{
        type: DataTypes.INTEGER
    }
}, {
    timestamps: false
});

