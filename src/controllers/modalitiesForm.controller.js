import { User } from "../models/User.js";
import { ModalitiesForm } from "../models/ModalitiesForm.js";
import { PracticeMode } from "../models/PracticeMode.js";

export const getModalitiesForm = async (req, res) => {
    try {
        const modalitiesForm = await ModalitiesForm.findAll({
            include: [
                {
                    model: User,
                    as: 'usuario', // Alias para el usuario
                    attributes: ['id', 'primer_nombre', 'primer_apellido'] // Asegúrate de que estos campos existan en el modelo User
                },
                {
                    model: PracticeMode,                    
                    as: 'modalidad', // Alias para la modalidad
                    attributes: ['id', 'nombre'] // Asegúrate de que estos campos existan en el modelo ModalidadPractica
                }
            ]
        });

        if (modalitiesForm.length === 0) {
            return res.status(404).json({ message: 'No se encontraron formularios de modalidad' });
        }

        res.status(200).json(modalitiesForm);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener los formularios de modalidad', error: error.message });
    }
};

export const getModalitiesFormById = async (req, res) => {
    const { id } = req.params;

    try {
        const modalitiesForm = await ModalitiesForm.findOne({
            where: { id: id },
            include: [
                {
                    model: User,
                    as: 'usuario',
                    attributes: ['id', 'primer_nombre', 'primer_apellido']
                },
                {
                    model: PracticeMode,
                    as: 'modalidad',
                    attributes: ['id', 'nombre']
                }
            ]
        });

        if (!modalitiesForm) {
            return res.status(404).json({ message: 'Formulario de modalidad no encontrado' });
        }

        res.status(200).json(modalitiesForm);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener el formulario de modalidad', error: error.message });
    }
};

export const createModalitiesForm = async (req, res) => {
    const { id_usuario, id_modalidad, fecha_seleccion, estado } = req.body;

    if (!id_usuario || !id_modalidad || !fecha_seleccion || !estado) {
        return res.status(400).json({ message: 'Todos los campos son obligatorios' });
    }

    try {
        const newModalitiesForm = await ModalitiesForm.create({
            id_usuario,
            id_modalidad,
            fecha_seleccion,
            estado
        });

        res.status(201).json(newModalitiesForm);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error creando el formulario de modalidad', error: error.message });
    }
};

export const updateModalitiesForm = async (req, res) => {
    const { id } = req.params;
    const { id_usuario, id_modalidad, fecha_seleccion, estado } = req.body;

    if (!id_usuario || !id_modalidad || !fecha_seleccion || !estado) {
        return res.status(400).json({ message: 'Todos los campos son obligatorios' });
    }

    try {
        const [updated] = await ModalitiesForm.update(
            { id_usuario, id_modalidad, fecha_seleccion, estado },
            { where: { id: id } }
        );

        if (updated === 0) {
            return res.status(404).json({ message: 'Formulario de modalidad no encontrado' });
        }

        res.status(200).json({ message: 'Formulario de modalidad actualizado con éxito' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error actualizando el formulario de modalidad', error: error.message });
    }
};

export const deleteModalitiesForm = async (req, res) => {
    const { id } = req.params;

    try {
        const deleted = await ModalitiesForm.destroy({
            where: { id: id }
        });

        if (deleted === 0) {
            return res.status(404).json({ message: 'Formulario de modalidad no encontrado' });
        }

        res.status(200).json({ message: 'Formulario de modalidad eliminado con éxito' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error eliminando el formulario de modalidad', error: error.message });
    }
};
