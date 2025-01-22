import Final_reportGetter from '../business/Practices/final-report-tecGetter.js'; // Asegúrate de la ruta correcta
import { Final_report } from '../models/final-report-tec.js';

// Instancia del getter para obtener los reportes finales
const finalReportGetter = new Final_reportGetter();

// Función para obtener todos los reportes finales
export const getFinalReports = async (req, res) => {
    try {
        // Obtenemos los filtros desde los query params
        const filters = req.query;
        
        // Llamamos al método get del FinalReportGetter pasando los filtros
        const data = await finalReportGetter.get(filters);
        
        // Respondemos con los datos obtenidos en formato JSON
        res.status(200).json(data);
    } catch (error) {
        console.error("Error al obtener los reportes finales:", error);
        res.status(500).json({ error: "No se pudo obtener el reporte final" });
    }
};

// Tu función para obtener el reporte final por ID
export const getFinalReportById = async (req, res) => {
    try {
        const { id } = req.params;
        const report = await Final_report.findByPk(id);

        if (!report) {
            return res.status(404).json({ error: "Reporte no encontrado" });
        }

        res.status(200).json(report);
    } catch (error) {
        console.error("Error al obtener el reporte final:", error);
        res.status(500).json({ error: "No se pudo obtener el reporte final" });
    }
};

// Función para crear un nuevo reporte final

export const createFinalReport = async (req, res) => {
    try {
        console.log("Datos recibidos:", req.body);

        // Lista completa de campos requeridos
        const requiredFields = [
            'assessment_one', 'assessment_two', 'assessment_three',
            'competencies_one', 'competencies_two', 'competencies_three', 
            'competencies_four', 'competencies_five', 'competencies_six',
            'competencies_seven', 'competencies_eight',
            'observation_one', 'observation_two', 'observation_three',
            'observation_four', 'observation_five', 'observation_six',
            'observation_seven', 'observation_eight', 'observation_nine',
            'observation_ten', 'observation_eleven', 'observation_twelve',
            'indicator_one', 'indicator_two', 'indicator_three',
            'indicator_four', 'indicator_five', 
            'indicator_seven', 'indicator_eight', 'indicator_nine',
            'indicator_ten', 'indicator_eleven', 
            'indicator_thirteen', 'indicator_fourteen', 'indicator_fifteen',
            'indicator_sixteen', 'indicator_seventeen', 
            'indicator_nineteen', 'indicator_twenty', 'indicator_twentyone',
            'indicator_twentytwo', 'indicator_twentythree', 
            'indicator_twentyfive', 'indicator_twentysix', 'indicator_twentyseven',
            'indicator_twentyeight', 'indicator_twentynine', 
            'indicator_thirtyone', 'indicator_thirtytwo', 'indicator_thirtythree',
            'indicator_thirtyfour', 'indicator_thirtyfive', 
            'student_one', 'student_two', 'student_three', 'student_four', 'student_five'
        ];

        // Validar campos requeridos
        const missingFields = requiredFields.filter(field => req.body[field] === undefined);
        if (missingFields.length > 0) {
            return res.status(400).json({
                error: "Faltan campos requeridos",
                missingFields: missingFields
            });
        }

        // Campos que deben ser numéricos y estar entre 1 y 5
        const numericFields = [

        ];

        // Validar campos numéricos
        for (const field of numericFields) {
            const value = req.body[field];
            if (typeof value !== 'number' || value < 1 || value > 5) {
                return res.status(400).json({
                    error: `El campo ${field} debe ser un número entre 1 y 5`,
                    field: field,
                    receivedValue: value
                });
            }
        }

        // Validar campos de texto
        const textFields = [

        ];

        for (const field of textFields) {
            if (typeof req.body[field] !== 'string' || !req.body[field].trim()) {
                return res.status(400).json({
                    error: `El campo ${field} debe ser un texto no vacío`,
                    field: field,
                    receivedValue: req.body[field]
                });
            }
        }

        // Validar campos booleanos
        const booleanFields = [

        ];

        for (const field of booleanFields) {
            if (typeof req.body[field] !== 'boolean') {
                return res.status(400).json({
                    error: `El campo ${field} debe ser un valor booleano`,
                    field: field,
                    receivedValue: req.body[field]
                });
            }
        }

        // Validar campo student_one (project_stage)
        if (!['Propuesta', 'Desarrollo(pruebas)', 'Implementación'].includes(req.body.student_one)) {
            return res.status(400).json({
                error: "Valor inválido para student_one",
                allowedValues: ['Propuesta', 'Desarrollo(pruebas)', 'Implementación']
            });
        }

        // Validar campo student_two (progress_level)
        if (!['Menos del 50%', '50%', '75%', '100'].includes(req.body.student_two)) {
            return res.status(400).json({
                error: "Valor inválido para student_two",
                allowedValues: ['Menos del 50%', '50%', '75%', '100']
            });
        }

        // Validar campo student_four (boolean_choice)
        if (!['Si', 'No'].includes(req.body.student_four)) {
            return res.status(400).json({
                error: "Valor inválido para student_four",
                allowedValues: ['Si', 'No']
            });
        }

        // Validar campo observation_twelve (satisfaction_level)
        if (!['Muy satisfecho', 'Satisfecho', 'Medianamente satisfecho', 'Poco satisfecho', 'Insatisfecho']
            .includes(req.body.observation_twelve)) {
            return res.status(400).json({
                error: "Valor inválido para observation_twelve",
                allowedValues: ['Muy satisfecho', 'Satisfecho', 'Medianamente satisfecho', 'Poco satisfecho', 'Insatisfecho']
            });
        }

        // Si todas las validaciones pasan, crear el reporte
        const reportData = req.body;
        const newReport = await Final_report.create(reportData);

        res.status(201).json({
            message: "Reporte final creado exitosamente",
            data: newReport,
        });
    } catch (error) {
        console.error("Error al crear el reporte final:", error);
        res.status(500).json({
            error: "No se pudo crear el reporte final",
            details: error.message,
        });
    }
};