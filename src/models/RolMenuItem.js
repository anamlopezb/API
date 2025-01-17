import { DataTypes } from "sequelize";
import practicasDB from '../database/database.js';

export const RolMenuItem = practicasDB.define('rol_menu_item', {
    id_rol: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'rol', // nombre de la tabla referenciada
            key: 'id'
        }
    },
    id_menu_item: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'menu_item', // nombre de la tabla referenciada
            key: 'id'
        }
    }
}, {
    timestamps: false,
    tableName: 'rol_menu_item'
});