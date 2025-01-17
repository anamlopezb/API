import { StudentDocuments } from "../models/StudentDocuments.js";
export const getStudentDocuments = async (req, res) => {
    try {
        const documentos = await StudentDocuments.findAll();

        if (documentos.length === 0) {
            return res.status(404).json({ message: 'No se encontraron documentos parametrizados' });
        }

        res.status(200).json(documentos);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener los documentos parametrizados', error: error.message });
    }
};

export const getStudentDocumentsById = async (req, res) => {
    const { id } = req.params;

    try {
        const documento = await StudentDocuments.findOne({
            where: { id_documento: id }
        });

        if (!documento) {
            return res.status(404).json({ message: 'Documento no encontrado' });
        }

        res.status(200).json(documento);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener el documento parametrizado', error: error.message });
    }
};

export const createStudentDocuments = async (req, res) => {
    const { nombre_documento, descripcion_documento, tipo_documento, estado_documento, archivo_requerido } = req.body;

    if (!nombre_documento || !tipo_documento || !estado_documento) {
        return res.status(400).json({ message: 'Los campos nombre_documento, tipo_documento y estado_documento son obligatorios' });
    }

    try {
        const newDocumento = await StudentDocuments.create({
            nombre_documento,
            descripcion_documento,
            tipo_documento,
            estado_documento,
            archivo_requerido
        });

        res.status(201).json({
            message: 'Documento parametrizado creado exitosamente',
            data: newDocumento
        });
    } catch (error) {
        console.error('Error al crear el documento parametrizado:', error);
        res.status(500).json({ 
            message: 'Error creando el documento parametrizado', 
            error: error.message 
        });
    }
};

export const updateStudentDocuments = async (req, res) => {
    const { id } = req.params;
    const { nombre_documento, descripcion_documento, tipo_documento, estado_documento, archivo_requerido } = req.body;

    if (!nombre_documento || !tipo_documento || !estado_documento) {
        return res.status(400).json({ message: 'Los campos nombre_documento, tipo_documento y estado_documento son obligatorios' });
    }

    try {
        const [updated] = await StudentDocuments.update(
            { nombre_documento, descripcion_documento, tipo_documento, estado_documento, archivo_requerido },
            { where: { id_documento: id } }
        );

        if (updated === 0) {
            return res.status(404).json({ message: 'Documento parametrizado no encontrado' });
        }

        res.status(200).json({ message: 'Documento parametrizado actualizado con éxito' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error actualizando el documento parametrizado', error: error.message });
    }
};

export const deleteStudentDocuments = async (req, res) => {
    const { id } = req.params;

    try {
        const deleted = await StudentDocuments.destroy({
            where: { id_documento: id }
        });

        if (deleted === 0) {
            return res.status(404).json({ message: 'Documento parametrizado no encontrado' });
        }

        res.status(200).json({ message: 'Documento parametrizado eliminado con éxito' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error eliminando el documento parametrizado', error: error.message });
    }
};
