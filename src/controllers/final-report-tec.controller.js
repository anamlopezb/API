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
        console.log("Datos recibidos:", req.body);  // Esto te ayudará a verificar si los datos se están recibiendo correctamente
        
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