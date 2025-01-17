import { DataTypes } from "sequelize";
import practicasDB from '../database/database.js';

export const StatesLoad = practicasDB.define('estados_cargues', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    descripcion: {
        type: DataTypes.STRING(500), // Puedes ajustar el tamaño según lo que necesites
        allowNull: true
    }
}, {
    tableName: 'estados_cargues',
    timestamps: false, 
});

