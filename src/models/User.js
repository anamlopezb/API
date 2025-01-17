import { DataTypes } from "sequelize";
import practicasDB from '../database/database.js';

export const User = practicasDB.define('usuarios', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    primer_nombre:{
        type: DataTypes.STRING
    },
    segundo_nombre:{
        type: DataTypes.STRING
    },
    primer_apellido:{
        type: DataTypes.STRING
    },
    segundo_apellido:{
        type: DataTypes.STRING
    },
    id_rol:{
        type: DataTypes.INTEGER
    }
}, {
    timestamps: false
});

