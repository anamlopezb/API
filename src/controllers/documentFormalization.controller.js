import { DocumentFormalization } from "../models/DocumentFormalization.js";
import { StudentDocuments } from "../models/StudentDocuments.js";
import { StatesLoad } from "../models/StatesLoad.js";
import { StatesRelease } from "../models/StatesRelease.js";

import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

// Obtén el directorio actual
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


// Método para obtener todos los documentos de formalización
export const getDocumentFormalization = async (req, res) => {
    try {
        const documentos = await DocumentFormalization.findAll();

        if (documentos.length === 0) {
            return res.status(404).json({ message: 'No se encontraron documentos de formalización' });
        }

        res.status(200).json(documentos);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener los documentos de formalización', error: error.message });
    }
};

export const getDocumentFormalizationById = async (req, res) => {
    const { id } = req.params;

    try {
        const documento = await DocumentFormalization.findOne({
            where: { id_documento_practica: id }
        });

        if (!documento) {
            return res.status(404).json({ message: 'Documento de formalización no encontrado' });
        }

        res.status(200).json(documento);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener el documento de formalización', error: error.message });
    }
};

// Método para actualizar el registro de formalización de documentos
export const updateFormalizationDocumentRecord = async (req, res) => {
    const { id } = req.params;
    const { nombre_documento, tipo_documento, estado_documento, fecha_cargue } = req.body;

    // Verifica que el archivo esté presente
    if (!req.file) {
        return res.status(400).json({ message: 'Archivo no cargado' });
    }

    // Verifica que los campos requeridos no estén vacíos
    if (!nombre_documento || !tipo_documento || !estado_documento || !fecha_cargue) {
        return res.status(400).json({ message: 'Faltan campos requeridos' });
    }

    try {
        // Busca el registro de formalización del documento por su id
        const documentRecord = await DocumentFormalization.findByPk(id);

        if (!documentRecord) {
            return res.status(404).json({ message: 'Registro de formalización no encontrado' });
        }
        
        // Verifica si el estado de cargue es 3 (aprobado)
        if (documentRecord.id_estado_entregas === 3) {
            return res.status(400).json({ message: 'No se puede restablecer el registro, ya está aprobado.' });
        }
        // Si existe un archivo previamente cargado, intenta eliminarlo
        if (documentRecord.ruta_documento) {
            const filePath = path.join(__dirname, '..', documentRecord.ruta_documento); // Construye la ruta completa

            if (fs.existsSync(filePath)) {
                fs.unlink(filePath, (err) => {
                    if (err) {
                        console.error('Error al eliminar el archivo anterior:', err);
                        return res.status(500).json({ message: 'Error al eliminar el archivo anterior' });
                    }
                    console.log('Archivo anterior eliminado correctamente');
                });
            } else {
                console.log('Archivo anterior no encontrado:', filePath);
            }
        }

        // Actualiza el registro con los nuevos valores
        await documentRecord.update({
            documento: nombre_documento,             // Actualiza el nombre del documento
            tipo_documento,                          // Actualiza el tipo de documento
            estado_documento,                        // Actualiza el estado del documento
            fecha_cargue,                            // Actualiza la fecha de carga
            ruta_documento: `uploads/${req.file.filename}`,  // Guarda solo la ruta relativa
            tamano_documento: req.file.size,         // Actualiza el tamaño del archivo
            formato_documento: req.file.mimetype,    // Actualiza el tipo de archivo
            fecha_actualizacion: new Date(),         // Actualiza la fecha de actualización
            id_estado_cargues: 2,                   // Establece el estado de entrega como 2
        });

        res.status(200).json({ message: 'Registro actualizado correctamente.' });
    } catch (error) {
        console.error('Error al actualizar el registro de formalización:', error);
        res.status(500).json({ error: 'Error al actualizar el registro de formalización.' });
    }
};


  // Actualizar un documento de formalización
export const updateDocumentFormalization = async (req, res) => {
    const { id } = req.params;
    const { id_practica, nombre_documento, tipo_documento, estado_documento, fecha_cargue, es_aprobado } = req.body;

    if (!id_practica || !nombre_documento || !tipo_documento || !estado_documento || !fecha_cargue || es_aprobado === undefined) {
        return res.status(400).json({ message: 'Los campos id_practica, nombre_documento, tipo_documento, estado_documento, fecha_cargue y es_aprobado son obligatorios' });
    }

    try {
        const [updated] = await DocumentFormalization.update(
            { id_practica, nombre_documento, tipo_documento, estado_documento, fecha_cargue, es_aprobado },
            { where: { id_documento_practica: id } }
        );

        if (updated === 0) {
            return res.status(404).json({ message: 'Documento de formalización no encontrado' });
        }

        res.status(200).json({ message: 'Documento de formalización actualizado con éxito' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error actualizando el documento de formalización', error: error.message });
    }
};

export const deleteDocumentFormalization = async (req, res) => {
    const { id } = req.params;

    try {
        const deleted = await DocumentFormalization.destroy({
            where: { id_documento_practica: id }
        });

        if (deleted === 0) {
            return res.status(404).json({ message: 'Documento de formalización no encontrado' });
        }

        res.status(200).json({ message: 'Documento de formalización eliminado con éxito' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error eliminando el documento de formalización', error: error.message });
    }
};


export const getDocumentsByPractice = async (req, res) => {
    const { idPractice } = req.params;
    try {
        const documentos = await DocumentFormalization.findAll({
            where: { id_practica: idPractice },
            include: [
                {
                    model: StudentDocuments,
                    as: 'documentos_estudiante',
                    attributes: ['id_documento', 'nombre_documento',  'id_modalidades_practicas'],
                },
                {
                    model: StatesLoad,
                    as: 'estados_cargue',
                    attributes: ['id', 'nombre'],
                },
                {
                    model: StatesRelease,
                    as: 'estados_entrega',
                    attributes: ['id', 'nombre'],
                }
            ],
        });

        // Si no se encuentran documentos
        if (documentos.length === 0) {
            return res.status(404).json({ message: 'No se encontraron documentos asociados a esta práctica' });
        }

        // Responde con los documentos encontrados
        res.status(200).json(documentos);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener los documentos de la práctica', error: error.message });
    }
};


// Crear registros en la tabla documentos_formalizacion
export const createFormalizationDocumentRecord = async (req, res) => {
    const { idPractice, modalidad } = req.params; // Recibir modalidad como parámetro

    // Validar que los parámetros requeridos estén presentes
    if (!idPractice || !modalidad) {
        return res.status(400).json({ message: 'Los campos id_practica y modalidad son obligatorios' });
    }

    try {

        // Obtener todos los documentos de la tabla documentos_estudiante que coincidan con id_modalidades_practicas
        const documentosEstudiante = await StudentDocuments.findAll({
            where: { id_modalidades_practicas: modalidad }, // Filtrar por modalidad
            attributes: ['id_documento'] // Seleccionar columnas relevantes
        });

        // Validar si no se encontraron documentos
        if (documentosEstudiante.length === 0) {
            return res.status(404).json({ message: 'No se encontraron documentos para la modalidad especificada.' });
        }

        // Crear registros en la tabla documentos_formalizacion
        const registrosFormalizacion = documentosEstudiante.map((doc) => {
            return DocumentFormalization.create({
                id_practica: idPractice, // ID de la práctica
                id_estado_entregas: 1, // Estado inicial de entregas
                id_estado_cargues: 1, // Estado inicial de cargues
                id_documentos_estudiante: doc.id_documento, // Relación con documentos_estudiante
                documento: 'Sin Archivo', // Valor inicial para el documento
                fecha_cargue: null // Inicialmente sin fecha de cargue
            });
        });
        

        // Esperar que todas las operaciones asíncronas se completen
        await Promise.all(registrosFormalizacion);

        // Respuesta de éxito
        res.status(201).json({ message: 'Registros creados correctamente.' });
    } catch (error) {
        console.error('Error al crear registros:', error);
        res.status(500).json({ error: 'Error al crear registros.' });
    }
};

// Restablecer un registro de formalización
export const deleteFormalizationDocumentRecord = async (req, res) => {
    const { id } = req.params;

    if (!id) {
        return res.status(400).json({ message: 'El campo id es obligatorio' });
    }

    try {
        // Busca el registro de formalización del documento por su id
        const documentRecord = await DocumentFormalization.findByPk(id);

        if (!documentRecord) {
            return res.status(404).json({ message: 'Registro de formalización no encontrado' });
        }

        // Verifica si el estado de cargue es 3 (aprobado)
        if (documentRecord.id_estado_entregas === 3) {
            return res.status(400).json({ message: 'No se puede restablecer el registro, ya está aprobado.' });
        }

        // Elimina el archivo si existe
        if (documentRecord.ruta_documento) {
            const filePath = path.join(__dirname, '..', documentRecord.ruta_documento);  // Construye la ruta correcta

            // Verifica si el archivo existe antes de intentar eliminarlo
            if (fs.existsSync(filePath)) {
                fs.unlink(filePath, (err) => {
                    if (err) {
                        console.error('Error al eliminar el archivo:', err);
                        return res.status(500).json({ message: 'Error al eliminar el archivo' });
                    }
                    console.log('Archivo eliminado correctamente');
                });
            } else {
                console.log('Archivo no encontrado:', filePath);
                return res.status(404).json({ message: 'Archivo no encontrado' });
            }
        }

        // Restablece los valores del registro a su estado inicial
        await documentRecord.update({
            documento: 'Sin Archivo',       // Restablece el nombre del documento
            tipo_documento: null,          // Restablece el tipo de documento
            estado_documento: null,        // Restablece el estado del documento
            fecha_cargue: null,            // Restablece la fecha de carga
            ruta_documento: null,          // Restablece la ruta del archivo
            tamano_documento: null,        // Restablece el tamaño del archivo
            formato_documento: null,       // Restablece el formato del archivo
            fecha_actualizacion: new Date(), // Actualiza la fecha de modificación
            id_estado_entregas: 1,         // Restablece el estado de entrega inicial
            id_estado_cargues: 1,          // Restablece el estado de cargue inicial
        });

        // Enviar la respuesta solo después de la eliminación y la actualización
        res.status(200).json({ message: 'Registro restablecido correctamente.' });
    } catch (error) {
        console.error('Error al restablecer el registro de formalización:', error);
        res.status(500).json({ error: 'Error al restablecer el registro de formalización.' });
    }
};

// Ver el archivo de formalización
export const viewFormalizationDocument = async (req, res) => {
    const { id } = req.params;

    if (!id) {
        return res.status(400).json({ message: 'El campo id es obligatorio' });
    }

    try {
        // Busca el registro de formalización del documento por su id
        const documentRecord = await DocumentFormalization.findByPk(id);

        if (!documentRecord) {
            return res.status(404).json({ message: 'Registro de formalización no encontrado' });
        }

        // Verifica si el documento tiene una ruta asignada
        if (!documentRecord.ruta_documento) {
            return res.status(404).json({ message: 'El archivo no está disponible' });
        }

        const filePath = path.join(__dirname, '..', documentRecord.ruta_documento);  // Construye la ruta correcta

        // Verifica si el archivo existe
        if (fs.existsSync(filePath)) {
            // Establece los encabezados para la descarga del archivo
            res.setHeader('Content-Type', 'application/octet-stream');
            res.setHeader('Content-Disposition', `attachment; filename="${path.basename(filePath)}"`);

            // Envía el archivo al cliente
            fs.createReadStream(filePath).pipe(res);
        } else {
            return res.status(404).json({ message: 'Archivo no encontrado' });
        }
    } catch (error) {
        console.error('Error al recuperar el archivo:', error);
        res.status(500).json({ error: 'Error al recuperar el archivo' });
    }
};

