import { DataTypes } from "sequelize"; 
import practicasDB from '../database/database.js';

export const Second_Installment = practicasDB.define('segunda_entrega', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    // Campos de la tabla
    },
    // Campo del formulario
    progresspercentage: { 
        type: DataTypes.STRING
    },
    currentactivity: { 
        type: DataTypes.STRING
    },
    pendingactivities: { 
        type: DataTypes.STRING
    },
    difficulties: { 
        type: DataTypes.STRING
    },
    alignmentlevel: { 
        type: DataTypes.STRING
    },
    activityresponse: { 
        type: DataTypes.STRING
    },
    taskrelevance: { 
        type: DataTypes.STRING
    },
    taskrelevanceexplanation: { 
        type: DataTypes.STRING
    },
    supervisionlevel: { 
        type: DataTypes.STRING
    },
    supervisiondetails: { 
        type: DataTypes.STRING
    },
    planprogress: { 
        type: DataTypes.STRING
    },
    scopemaintained: { 
        type: DataTypes.STRING
    },
    newscopeobjective: { 
        type: DataTypes.STRING
    },
    teacherguidance: { 
        type: DataTypes.STRING
    }
}, {
    timestamps: false,
    tableName: 'segunda_entrega' // Asegúrate de que esto coincide con el nombre de la tabla en la base de datos

});