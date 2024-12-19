import { DataTypes } from "sequelize";
import practicasDB from '../database/database.js';
import { Third_installment } from "./third-installment.js";
import { PracticeLevel } from "./PracticeLevel.js";

export const Final_report = practicasDB.define('formulario_final', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_tercera_entrega:{
        type: DataTypes.INTEGER
    },
    id_nivel_practica:{
        type: DataTypes.INTEGER
    },
    nombre:{
        type: DataTypes.STRING
    },
    lista_opciones:{
        type: DataTypes.INTEGER
    },
    casilla:{
        type: DataTypes.STRING
    },
    opcion_respuesta:{
        type: DataTypes.STRING
    },

}, {
    timestamps: false
});