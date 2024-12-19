import { DataTypes } from "sequelize";
import practicasDB from '../database/database.js';

export const MenuItem = practicasDB.define('menu_item', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre_item: {
        type: DataTypes.STRING,
        allowNull: false
    },
    enlace: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descripcion: {
        type: DataTypes.TEXT,
        allowNull: true
    }
}, {
    timestamps: false,
    tableName: 'menu_item'
});
