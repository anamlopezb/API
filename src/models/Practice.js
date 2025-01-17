import { DataTypes } from "sequelize";
import practicasDB from '../database/database.js';

export const Practice = practicasDB.define('practica', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_usuario: {
        type: DataTypes.INTEGER,
        references: {
            model: 'usuarios', 
            key: 'id' 
        }
    },
    id_modalidad: {
        type: DataTypes.INTEGER,
        references: {
            model: 'modalidades',  
            key: 'id'  
        }
    },
    id_ciclo: {
        type: DataTypes.INTEGER,
        references: {
            model: 'ciclos',  
            key: 'id'
        }
    },
    id_docente: {
        type: DataTypes.INTEGER,
        references: {
            model: 'roles',  
            key: 'id' 
        }
    },
    nombre_empresa: {
        type: DataTypes.STRING(255)
    },
    fecha_inicio: {
        type: DataTypes.DATE
    },
    fecha_fin: {
        type: DataTypes.DATE
    },
    id_estado_practica: {
        type: DataTypes.INTEGER,
        references: {
            model: 'estados_practicas', 
            key: 'id_estado_practica' 
        }
    }
}, {
    tableName: 'practica',
    timestamps: false
});
