import { StatesLoad } from "../models/StatesLoad.js"; 

// Obtener todos los estados de cargue
export const getStatesLoad = async (req, res) => {
    try {
        const estados = await StatesLoad.findAll();

        if (estados.length === 0) {
            return res.status(404).json({ message: 'No se encontraron estados de cargue' });
        }

        res.status(200).json(estados);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener los estados de cargue', error: error.message });
    }
};

// Obtener un estado de cargue por ID
export const getStatesLoadById = async (req, res) => {
    const { id } = req.params;

    try {
        const estado = await StatesLoad.findOne({
            where: { id }
        });

        if (!estado) {
            return res.status(404).json({ message: 'Estado de cargue no encontrado' });
        }

        res.status(200).json(estado);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener el estado de cargue', error: error.message });
    }
};

// Crear un nuevo estado de cargue
export const createStatesLoad = async (req, res) => {
    const { nombre, descripcion } = req.body;

    if (!nombre || !descripcion) {
        return res.status(400).json({ message: 'Los campos nombre y descripción son obligatorios' });
    }

    try {
        const newEstado = await StatesLoad.create({
            nombre,
            descripcion
        });

        res.status(201).json({
            message: 'Estado de cargue creado exitosamente',
            data: newEstado
        });
    } catch (error) {
        console.error('Error al crear el estado de cargue:', error);
        res.status(500).json({ 
            message: 'Error creando el estado de cargue', 
            error: error.message 
        });
    }
};

// Actualizar un estado de cargue existente
export const updateStatesLoad = async (req, res) => {
    const { id } = req.params;
    const { nombre, descripcion } = req.body;

    if (!nombre || !descripcion) {
        return res.status(400).json({ message: 'Los campos nombre y descripción son obligatorios' });
    }

    try {
        const [updated] = await StatesLoad.update(
            { nombre, descripcion },
            { where: { id } }
        );

        if (updated === 0) {
            return res.status(404).json({ message: 'Estado de cargue no encontrado' });
        }

        res.status(200).json({ message: 'Estado de cargue actualizado con éxito' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error actualizando el estado de cargue', error: error.message });
    }
};

// Eliminar un estado de cargue
export const deleteStatesLoad = async (req, res) => {
    const { id } = req.params;

    try {
        const deleted = await StatesLoad.destroy({
            where: { id }
        });

        if (deleted === 0) {
            return res.status(404).json({ message: 'Estado de cargue no encontrado' });
        }

        res.status(200).json({ message: 'Estado de cargue eliminado con éxito' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error eliminando el estado de cargue', error: error.message });
    }
};
