import { Documents } from "../models/Documents.js";

const BASE_URL = 'http://localhost:3000';

export const getDocuments = async (req, res) => {
    try {
        const documents = await Documents.findAll();

        if (documents.length === 0) {
            return res.status(404).json({ message: 'No se encontraron documentos' });
        }

        // Concatenar la URL base con la ruta del documento
        const documentsWithUrls = documents.map(doc => ({
            ...doc.toJSON(),
            url: `${BASE_URL}/${encodeURIComponent(doc.ruta_documento)}`
        }));

        res.status(200).json(documentsWithUrls);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener los documentos', error: error.message });
    }
};

export const getDocumentsById = async (req, res) => {
    const { id } = req.params;

    try {
        const document = await Documents.findOne({
            where: { id: id }
        });

        if (!document) {
            return res.status(404).json({ message: 'Documento no encontrado' });
        }

        // Concatenar la URL base con la ruta del documento de manera correcta
        const documentWithUrl = {
            ...document.toJSON(),
            url: `${BASE_URL.replace(/\/$/, '')}/${encodeURIComponent(document.ruta_documento.replace(/^\/+/, ''))}`
        };

        res.status(200).json(documentWithUrl);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener el documento', error: error.message });
    }
};

export const createDocument = async (req, res) => {
    const { nombre_documento, estado, ruta_documento } = req.body;

    if (!nombre_documento || !estado || !ruta_documento) {
        return res.status(400).json({ message: 'Todos los campos son obligatorios' });
    }

    if (typeof nombre_documento !== 'string' || typeof estado !== 'string' || typeof ruta_documento !== 'string') {
        return res.status(400).json({ message: 'Los campos nombre_documento, estado y ruta_documento deben ser cadenas de texto' });
    }

    try {
        const newDocument = await Documents.create({
            nombre_documento,
            estado,
            ruta_documento
        });

        const { id, ...filteredData } = newDocument.toJSON();

        // Concatenar la URL base con la ruta del documento
        res.status(201).json({
            message: 'Documento creado exitosamente',
            data: {
                ...filteredData,
                url: `${BASE_URL}/${encodeURIComponent(filteredData.ruta_documento)}`
            }
        });
    } catch (error) {
        console.error('Error al crear el documento:', error);
        res.status(500).json({ 
            message: 'Error creando el documento', 
            error: error.message 
        });
    }
};

export const updateDocument = async (req, res) => {
    const { id } = req.params;
    const { nombre_documento, estado, ruta_documento } = req.body;

    if (!nombre_documento || !estado || !ruta_documento) {
        return res.status(400).json({ message: 'Todos los campos son obligatorios' });
    }

    try {
        const [updated] = await Documents.update(
            { nombre_documento, estado, ruta_documento },
            { where: { id: id } }
        );

        if (updated === 0) {
            return res.status(404).json({ message: 'Documento no encontrado' });
        }

        res.status(200).json({ message: 'Documento actualizado con éxito' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error actualizando el documento', error: error.message });
    }
};

export const deleteDocument = async (req, res) => {
    const { id } = req.params;

    try {
        const deleted = await Documents.destroy({
            where: { id: id }
        });

        if (deleted === 0) {
            return res.status(404).json({ message: 'Documento no encontrado' });
        }

        res.status(200).json({ message: 'Documento eliminado con éxito' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error eliminando el documento', error: error.message });
    }
};


