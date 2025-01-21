import { PracticeReleaseDocument } from "../models/PracticeReleaseDocument.js";
// Obtener todos los documentos de entrega
export const getPracticeReleaseDocument = async (req, res) => {
    try {
        const documentos = await PracticeReleaseDocument.findAll();

        if (documentos.length === 0) {
            return res.status(404).json({ message: 'No se encontraron documentos de entrega' });
        }

        res.status(200).json(documentos);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener los documentos de entrega', error: error.message });
    }
};

// Obtener un documento de entrega por ID
export const getPracticeReleaseDocumentById = async (req, res) => {
    const { id } = req.params;

    try {
        const documento = await PracticeReleaseDocument.findOne({
            where: { id }
        });

        if (!documento) {
            return res.status(404).json({ message: 'Documento de entrega no encontrado' });
        }

        res.status(200).json(documento);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener el documento de entrega', error: error.message });
    }
};

// Crear un nuevo documento de entrega
export const createPracticeReleaseDocument = async (req, res) => {
    const { nombre_documento, descripcion_documento, tipo_documento, estado_documento, fecha_creacion, archivo_requerido, id_entrega } = req.body;

    if (!nombre_documento || !tipo_documento || !estado_documento || !id_entrega) {
        return res.status(400).json({ message: 'Los campos nombre_documento, tipo_documento, estado_documento y id_entrega son obligatorios' });
    }

    try {
        const newDocumento = await PracticeReleaseDocument.create({
            nombre_documento,
            descripcion_documento,
            tipo_documento,
            estado_documento,
            fecha_creacion,
            archivo_requerido,
            id_entrega
        });

        res.status(201).json({
            message: 'Documento de entrega creado exitosamente',
            data: newDocumento
        });
    } catch (error) {
        console.error('Error al crear el documento de entrega:', error);
        res.status(500).json({ 
            message: 'Error creando el documento de entrega', 
            error: error.message 
        });
    }
};

// Actualizar un documento de entrega existente
export const updatePracticeReleaseDocument = async (req, res) => {
    const { id } = req.params;
    const { nombre_documento, descripcion_documento, tipo_documento, estado_documento, fecha_modificacion, archivo_requerido, id_entrega } = req.body;

    if (!nombre_documento || !tipo_documento || !estado_documento || !id_entrega) {
        return res.status(400).json({ message: 'Los campos nombre_documento, tipo_documento, estado_documento y id_entrega son obligatorios' });
    }

    try {
        const [updated] = await PracticeReleaseDocument.update(
            { 
                nombre_documento, 
                descripcion_documento, 
                tipo_documento, 
                estado_documento, 
                fecha_modificacion, 
                archivo_requerido, 
                id_entrega 
            },
            { where: { id } }
        );

        if (updated === 0) {
            return res.status(404).json({ message: 'Documento de entrega no encontrado' });
        }

        res.status(200).json({ message: 'Documento de entrega actualizado con éxito' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error actualizando el documento de entrega', error: error.message });
    }
};

// Eliminar un documento de entrega
export const deletePracticeReleaseDocument = async (req, res) => {
    const { id } = req.params;

    try {
        const deleted = await PracticeReleaseDocument.destroy({
            where: { id }
        });

        if (deleted === 0) {
            return res.status(404).json({ message: 'Documento de entrega no encontrado' });
        }

        res.status(200).json({ message: 'Documento de entrega eliminado con éxito' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error eliminando el documento de entrega', error: error.message });
    }
};
