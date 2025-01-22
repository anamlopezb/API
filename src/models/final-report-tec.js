import { DataTypes } from "sequelize";
import practicasDB from "../database/database.js";

export const Final_report = practicasDB.define(
    "formulario_final",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        // Campos del formulario
        assessment_one: {
            type: DataTypes.INTEGER,
            allowNull: true,
            validate: {
                min: 1,
                max: 5,
            },
        },
        assessment_two: {
            type: DataTypes.INTEGER,
            allowNull: true,
            validate: {
                min: 1,
                max: 5,
            },
        },
        assessment_three: {
            type: DataTypes.INTEGER,
            allowNull: true,
            validate: {
                min: 1,
                max: 5,
            },
        },

        competencies_one: {
            type: DataTypes.INTEGER,
            allowNull: true,
            validate: {
                min: 1,
                max: 5,
            },
        },
        competencies_two: {
            type: DataTypes.INTEGER,
            allowNull: true,
            validate: {
                min: 1,
                max: 5,
            },
        },
        competencies_three: {
            type: DataTypes.INTEGER,
            allowNull: true,
            validate: {
                min: 1,
                max: 5,
            },
        },
        competencies_four: {
            type: DataTypes.INTEGER,
            allowNull: true,
            validate: {
                min: 1,
                max: 5,
            },
        },
        competencies_five: {
            type: DataTypes.INTEGER,
            allowNull: true,
            validate: {
                min: 1,
                max: 5,
            },
        },
        competencies_six: {
            type: DataTypes.INTEGER,
            allowNull: true,
            validate: {
                min: 1,
                max: 5,
            },
        },
        competencies_seven: {
            type: DataTypes.INTEGER,
            allowNull: true,
            validate: {
                min: 1,
                max: 5,
            },
        },
        competencies_eight: {
            type: DataTypes.INTEGER,
            allowNull: true,
            validate: {
                min: 1,
                max: 5,
            },
        },

        observation_one: {
            type: DataTypes.INTEGER,
            allowNull: true,
            validate: {
                min: 1,
                max: 5,
            },
        },
        observation_two: {
            type: DataTypes.INTEGER,
            allowNull: true,
            validate: {
                min: 1,
                max: 5,
            },
        },
        observation_three: {
            type: DataTypes.INTEGER,
            allowNull: true,
            validate: {
                min: 1,
                max: 5,
            },
        },
        observation_four: {
            type: DataTypes.INTEGER,
            allowNull: true,
            validate: {
                min: 1,
                max: 5,
            },
        },
        observation_five: {
            type: DataTypes.INTEGER,
            allowNull: true,
            validate: {
                min: 1,
                max: 5,
            },
        },
        observation_six: {
            type: DataTypes.INTEGER,
            allowNull: true,
            validate: {
                min: 1,
                max: 5,
            },
        },
        observation_seven: {
            type: DataTypes.INTEGER,
            allowNull: true,
            validate: {
                min: 1,
                max: 5,
            },
        },
        observation_eight: {
            type: DataTypes.INTEGER,
            allowNull: true,
            validate: {
                min: 1,
                max: 5,
            },
        },
        observation_nine: {
            type: DataTypes.INTEGER,
            allowNull: true,
            validate: {
                min: 1,
                max: 5,
            },
        },
        observation_ten: {
            type: DataTypes.INTEGER,
            allowNull: true,
            validate: {
                min: 1,
                max: 5,
            },
        },
        observation_eleven: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        observation_twelve: {
            type: DataTypes.ENUM('Muy satisfecho', 'Satisfecho', 'Medianamente satisfecho', 'Poco satisfecho', 'Insatisfecho'),
            allowNull: true,
        },

        indicator_one: {
            type: DataTypes.INTEGER,
            allowNull: true,
            validate: {
                min: 1,
                max: 5,
            },
        },
        indicator_two: {
            type: DataTypes.INTEGER,
            allowNull: true,
            validate: {
                min: 1,
                max: 5,
            },
        },
        indicator_three: {
            type: DataTypes.INTEGER,
            allowNull: true,
            validate: {
                min: 1,
                max: 5,
            },
        },
        indicator_four: {
            type: DataTypes.INTEGER,
            allowNull: true,
            validate: {
                min: 1,
                max: 5,
            },
        },
        indicator_five: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        indicator_six: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        indicator_seven: {
            type: DataTypes.INTEGER,
            allowNull: true,
            validate: {
                min: 1,
                max: 5,
            },
        },
        indicator_eight: {
            type: DataTypes.INTEGER,
            allowNull: true,
            validate: {
                min: 1,
                max: 5,
            },
        },
        indicator_nine: {
            type: DataTypes.INTEGER,
            allowNull: true,
            validate: {
                min: 1,
                max: 5,
            },
        },
        indicator_ten: {
            type: DataTypes.INTEGER,
            allowNull: true,
            validate: {
                min: 1,
                max: 5,
            },
        },
        indicator_eleven: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        indicator_twelve: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        indicator_thirteen: {
            type: DataTypes.INTEGER,
            allowNull: true,
            validate: {
                min: 1,
                max: 5,
            },
        },
        indicator_fourteen: {
            type: DataTypes.INTEGER,
            allowNull: true,
            validate: {
                min: 1,
                max: 5,
            },
        },
        indicator_fifteen: {
            type: DataTypes.INTEGER,
            allowNull: true,
            validate: {
                min: 1,
                max: 5,
            },
        },
        indicator_sixteen: {
            type: DataTypes.INTEGER,
            allowNull: true,
            validate: {
                min: 1,
                max: 5,
            },
        },
        indicator_seventeen: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        indicator_eighteen: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        indicator_nineteen: {
            type: DataTypes.INTEGER,
            allowNull: true,
            validate: {
                min: 1,
                max: 5,
            },
        },
        indicator_twenty: {
            type: DataTypes.INTEGER,
            allowNull: true,
            validate: {
                min: 1,
                max: 5,
            },
        },
        indicator_twentyone: {
            type: DataTypes.INTEGER,
            allowNull: true,
            validate: {
                min: 1,
                max: 5,
            },
        },
        indicator_twentytwo: {
            type: DataTypes.INTEGER,
            allowNull: true,
            validate: {
                min: 1,
                max: 5,
            },
        },
        indicator_twentythree: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        indicator_twentyfour: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        indicator_twentyfive: {
            type: DataTypes.INTEGER,
            allowNull: true,
            validate: {
                min: 1,
                max: 5,
            },
        },
        indicator_twentysix: {
            type: DataTypes.INTEGER,
            allowNull: true,
            validate: {
                min: 1,
                max: 5,
            },
        },
        indicator_twentyseven: {
            type: DataTypes.INTEGER,
            allowNull: true,
            validate: {
                min: 1,
                max: 5,
            },
        },
        indicator_twentyeight: {
            type: DataTypes.INTEGER,
            allowNull: true,
            validate: {
                min: 1,
                max: 5,
            },
        },
        indicator_twentynine: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        indicator_thirty: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        indicator_thirtyone: {
            type: DataTypes.INTEGER,
            allowNull: true,
            validate: {
                min: 1,
                max: 5,
            },
        },
        indicator_thirtytwo: {
            type: DataTypes.INTEGER,
            allowNull: true,
            validate: {
                min: 1,
                max: 5,
            },
        },
        indicator_thirtythree: {
            type: DataTypes.INTEGER,
            allowNull: true,
            validate: {
                min: 1,
                max: 5,
            },
        },
        indicator_thirtyfour: {
            type: DataTypes.INTEGER,
            allowNull: true,
            validate: {
                min: 1,
                max: 5,
            },
        },
        indicator_thirtyfive: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        indicator_thirtysix: {
            type: DataTypes.TEXT,
            allowNull: true,
        },

        student_one: {
            type: DataTypes.ENUM('Propuesta', 'Desarrollo(pruebas)', 'Implementación'),
            allowNull: true,
        },
        student_two: {
            type: DataTypes.ENUM('Menos del 50%', '50%', '75%', '100'),
            allowNull: true,
        },
        student_three: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        student_four: {
            type: DataTypes.ENUM('Si', 'No', 'Otras'),
            allowNull: true,
        },
        student_five: {
            type: DataTypes.TEXT,
            allowNull: true,
        },

        fecha_creacion: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            comment: "Fecha y hora de creación del registro",
        },
        fecha_modificacion: {
            type: DataTypes.DATE,
            allowNull: true,
            comment: "Fecha y hora de la última modificación",
        },
    },
    {
        tableName: "formulario_final",
        timestamps: false, // No usar `updatedAt` y `createdAt` automáticos
        comment: "Tabla para almacenar todas las respuestas del formulario final de prácticas",
    }
);

// Hook para actualizar la fecha de modificación
Final_report.beforeUpdate((report) => {
    report.fecha_modificacion = new Date();
});

export default Final_report;
