import { StatesRelease } from "../models/StatesRelease.js"; 

// Obtener todos los estados de entrega
export const getStatesRelease = async (req, res) => {
    try {
        const estados = await StatesRelease.findAll();

        if (estados.length === 0) {
            return res.status(404).json({ message: 'No se encontraron estados de entrega' });
        }

        res.status(200).json(estados);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener los estados de entrega', error: error.message });
    }
};

// Obtener un estado de entrega por ID
export const getStatesReleaseById = async (req, res) => {
    const { id } = req.params;

    try {
        const estado = await StatesRelease.findOne({
            where: { id }
        });

        if (!estado) {
            return res.status(404).json({ message: 'Estado de entrega no encontrado' });
        }

        res.status(200).json(estado);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener el estado de entrega', error: error.message });
    }
};

// Crear un nuevo estado de entrega
export const createStatesRelease = async (req, res) => {
    const { nombre, descripcion } = req.body;

    if (!nombre || !descripcion) {
        return res.status(400).json({ message: 'Los campos nombre y descripción son obligatorios' });
    }

    try {
        const newEstado = await StatesRelease.create({
            nombre,
            descripcion
        });

        res.status(201).json({
            message: 'Estado de entrega creado exitosamente',
            data: newEstado
        });
    } catch (error) {
        console.error('Error al crear el estado de entrega:', error);
        res.status(500).json({ 
            message: 'Error creando el estado de entrega', 
            error: error.message 
        });
    }
};

// Actualizar un estado de entrega existente
export const updateStatesRelease = async (req, res) => {
    const { id } = req.params;
    const { nombre, descripcion } = req.body;

    if (!nombre || !descripcion) {
        return res.status(400).json({ message: 'Los campos nombre y descripción son obligatorios' });
    }

    try {
        const [updated] = await StatesRelease.update(
            { nombre, descripcion },
            { where: { id } }
        );

        if (updated === 0) {
            return res.status(404).json({ message: 'Estado de entrega no encontrado' });
        }

        res.status(200).json({ message: 'Estado de entrega actualizado con éxito' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error actualizando el estado de entrega', error: error.message });
    }
};

// Eliminar un estado de entrega
export const deleteStatesRelease = async (req, res) => {
    const { id } = req.params;

    try {
        const deleted = await StatesRelease.destroy({
            where: { id }
        });

        if (deleted === 0) {
            return res.status(404).json({ message: 'Estado de entrega no encontrado' });
        }

        res.status(200).json({ message: 'Estado de entrega eliminado con éxito' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error eliminando el estado de entrega', error: error.message });
    }
};
