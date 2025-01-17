import { User } from "../models/User.js";
import { TermsAcceptance } from "../models/TermsAcceptance.js"; 

export const getTermsAcceptance = async (req, res) => {
    try {
        const termsAcceptance = await TermsAcceptance.findAll({
            include: [
                {
                    model: User,
                    as: 'usuarioQueAcepta', // Alias para el usuario
                    attributes: ['id', 'primer_nombre', 'primer_apellido'] // Asegúrate de que estos campos existan en el modelo User
                }
            ]
        });

        if (termsAcceptance.length === 0) {
            return res.status(404).json({ message: 'No se encontraron registros de aceptación de términos' });
        }

        res.status(200).json(termsAcceptance);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener los registros de aceptación de términos', error: error.message });
    }
};

export const getTermsAcceptanceById = async (req, res) => {
    const { id } = req.params;

    try {
        const termsAcceptance = await TermsAcceptance.findOne({
            where: { id: id },
            include: [
                {
                    model: User,
                    as: 'usuarioQueAcepta', // Alias para el usuario
                    attributes: ['id', 'primer_nombre', 'primer_apellido']
                }
            ]
        });

        if (!termsAcceptance) {
            return res.status(404).json({ message: 'Aceptación de términos no encontrada' });
        }

        res.status(200).json(termsAcceptance);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener la aceptación de términos', error: error.message });
    }
};

export const createTermsAcceptance = async (req, res) => {
    const { id_usuario, aceptar_terminos, fecha_aceptacion } = req.body;

    // Validación de entrada
    if (!id_usuario || aceptar_terminos === undefined || !fecha_aceptacion) {
        return res.status(400).json({ message: 'Todos los campos son obligatorios' });
    }

    if (typeof id_usuario !== 'number') {
        return res.status(400).json({ message: 'El campo id_usuario debe ser un número' });
    }

    if (typeof aceptar_terminos !== 'boolean') {
        return res.status(400).json({ message: 'El campo aceptar_terminos debe ser un valor booleano' });
    }

    if (isNaN(Date.parse(fecha_aceptacion))) {
        return res.status(400).json({ message: 'El campo fecha_aceptacion debe tener un formato de fecha válido' });
    }

    try {
        // Verificar si ya existe una aceptación de términos para el usuario
        const existingAcceptance = await TermsAcceptance.findOne({
            where: { id_usuario }
        });

        if (existingAcceptance) {
            return res.status(400).json({ message: 'Ya existe una aceptación de términos registrada para este usuario' });
        }

        // Si no existe, se crea la aceptación
        const newTermsAcceptance = await TermsAcceptance.create({
            id_usuario,
            aceptar_terminos,
            fecha_aceptacion
        });

        // Filtrar datos sensibles antes de enviarlos
        const { id, ...filteredData } = newTermsAcceptance.toJSON();

        res.status(201).json({
            message: 'Aceptación de términos creada exitosamente',
            data: filteredData
        });
    } catch (error) {
        console.error('Error al crear la aceptación de términos:', error);
        res.status(500).json({ 
            message: 'Error creando la aceptación de términos', 
            error: error.message 
        });
    }
};

export const updateTermsAcceptance = async (req, res) => {
    const { id_usuario } = req.params;  
    const { id_practica } = req.body;   
    
    console.log('id_usuario en el servidor:', id_usuario);
    
    if (!id_practica) {
        return res.status(400).json({ message: 'El id_practica es obligatorio' });
    }

    if (!id_usuario) {
        return res.status(400).json({ message: 'El id_usuario es obligatorio' });
    }

    try {
        // Verificar si existe la aceptación de términos para el usuario
        const acceptance = await TermsAcceptance.findOne({ where: { id_usuario } });

        if (!acceptance) {
            return res.status(404).json({ message: 'Aceptación de términos no encontrada para este usuario' });
        }

        // Actualizar la aceptación de términos con el id_practica
        const [updated] = await TermsAcceptance.update(
            { id_practica },
            { where: { id_usuario } }
        );

        if (updated === 0) {
            return res.status(404).json({ message: 'No se pudo actualizar la aceptación de términos' });
        }

        // Obtener los datos actualizados, incluyendo los datos del usuario
        const updatedAcceptance = await TermsAcceptance.findOne({
            where: { id_usuario },
            include: [
                {
                    model: User,
                    as: 'usuarioQueAcepta', // Alias para el usuario
                    attributes: ['id', 'primer_nombre', 'primer_apellido'] // Asegúrate de que estos campos existan en el modelo User
                }
            ]
        });

        res.status(200).json({ message: 'Aceptación de términos actualizada con éxito', data: updatedAcceptance });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error actualizando la aceptación de términos', error: error.message });
    }
};


  

export const deleteTermsAcceptance = async (req, res) => {
    const { id } = req.params;

    try {
        const deleted = await TermsAcceptance.destroy({
            where: { id: id }
        });

        if (deleted === 0) {
            return res.status(404).json({ message: 'Aceptación de términos no encontrada' });
        }

        res.status(200).json({ message: 'Aceptación de términos eliminada con éxito' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error eliminando la aceptación de términos', error: error.message });
    }
};

export const getTermsAcceptanceByUserId = async (req, res) => {
    const { id_usuario } = req.params;  // Get the user ID from the request parameters

    try {
        const termsAcceptance = await TermsAcceptance.findOne({
            where: { id_usuario: id_usuario },  // Search for the acceptance by user ID
            include: [
                {
                    model: User,
                    as: 'usuarioQueAcepta', // Alias for the user
                    attributes: ['id', 'primer_nombre', 'primer_apellido'] // Ensure these fields exist in the User model
                }
            ]
        });

        if (!termsAcceptance) {
            return res.status(404).json({ message: 'Aceptación de términos no encontrada para este usuario' });
        }

        res.status(200).json(termsAcceptance);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener la aceptación de términos para el usuario', error: error.message });
    }
};


