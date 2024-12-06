import { DataTypes } from "sequelize"; 
import practicasDB from '../database/database.js';

export const Second_Installment = practicasDB.define('estados_practicas', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    // Campos de la tabla
    },
    state: { 
        type: DataTypes.STRING
    },
    document: { 
        type: DataTypes.STRING
    },
    uploadDate: { 
        type: DataTypes.DATE
    },
    observations: {
        type: DataTypes.TEXT
    },
    // Campo del formulario
    progressPercentage: { 
        type: DataTypes.STRING
    },
    currentActivity: { 
        type: DataTypes.STRING
    },
    pendingActivities: { 
        type: DataTypes.STRING
    },
    difficulties: { 
        type: DataTypes.STRING
    },
    alignmentLevel: { 
        type: DataTypes.STRING
    },
    activityResponse: { 
        type: DataTypes.STRING
    },
    taskRelevance: { 
        type: DataTypes.STRING
    },
    taskRelevanceExplanation: { 
        type: DataTypes.STRING
    },
    supervisionLevel: { 
        type: DataTypes.STRING
    },
    supervisionDetails: { 
        type: DataTypes.STRING
    },
    planProgress: { 
        type: DataTypes.STRING
    },
    scopeMaintained: { 
        type: DataTypes.STRING
    },
    newScopeObjective: { 
        type: DataTypes.STRING
    },
    teacherGuidance: { 
        type: DataTypes.STRING
    }
}, {
    timestamps: false
});
