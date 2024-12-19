import { DataTypes } from "sequelize";
import practicasDB from '../database/database.js';

export const Rol = practicasDB.define('rol', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre_rol: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: false,
    tableName: 'rol' // Nombre de la tabla en la base de datos
});
