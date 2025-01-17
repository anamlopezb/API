import UserCreate from "../business/User/UserCreate.js";
import UserDelete from "../business/User/UserDelete.js";
import UserGetter from "../business/User/UserGetter.js";
import UserUpdate from "../business/User/UserUpdate.js";
import { Rol } from "../models/Rol.js";
import { User } from "../models/User.js";

// Obtener todos los users
export const getUser = async (req, res) => {
    try {
        let userGetter = new UserGetter();
        let users = await userGetter.get();
        res.status(200).json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error recuperando los users', error: error.message });
    }
};

// Obtener un user por ID
export const getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        let userGetter = new UserGetter();
        let user = await userGetter.getById(id);
        
        if (!user) {
            return res.status(404).json({ message: 'User no encontrado' });
        }

        res.status(200).json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error recuperando el user', error: error.message });
    }
};

// Obtener los users por rol
export const getUserByRol = async (req, res) => {
    try {
        const { rolId } = req.params;

        // Validación básica del rolId
        if (!rolId) {
            return res.status(400).json({ message: 'El ID del rol es requerido' });
        }

        // Crear una instancia del servicio y llamar al método para obtener los users por rol
        const userRol = new UserGetter();
        const users = await userRol.getByRol(rolId);

        res.status(200).json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener los users por rol', error: error.message });
    }
};

// Obtener el rol de un usuario por su id
export const getRoleByUserId = async (req, res) => {
    try {
        const { id } = req.params;

        // Buscar el usuario por su ID e incluir la relación con el rol
        let user = await User.findOne({
            where: { id },
            include: {
                model: Rol,
                as: 'roles', // Usar el alias correcto aquí
            }
        });

        if (!user) {
            return res.status(404).json({ message: 'User no encontrado' });
        }

        // El rol asociado al usuario
        res.status(200).json(user.roles);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error recuperando el rol del usuario', error: error.message });
    }
};

// Crear un nuevo user
export const createUser = async (req, res) => {
    try {
        const { primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, id_rol } = req.body;

        if (!primer_nombre || !primer_apellido || !id_rol) {
            return res.status(400).json({ message: 'Los campos primer nombre, primer apellido y rol son obligatorios' });
        }

        let userCreate = new UserCreate();
            let newUser = await userCreate.create(primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, id_rol);
        
        res.status(201).json(newUser);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error creando el user', error: error.message });
    }
};

// Actualizar un user existente
export const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, id_rol } = req.body;

        if (!primer_nombre || !primer_apellido || !id_rol) {
            return res.status(400).json({ message: 'Los campos primer nombre, primer apellido y rol son obligatorios' });
        }

        let userUpdate = new UserUpdate();
        let updatedUser = await userUpdate.update(id, primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, id_rol);

        if (updatedUser[0] === 0) {
            return res.status(404).json({ message: 'User no encontrado' });
        }

        res.status(200).json({ message: 'User actualizado con éxito' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error actualizando el user', error: error.message });
    }
};

// Eliminar un user
export const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        
        let userDelete = new UserDelete();
        let deletedUser = await userDelete.delete(id);

        if (deletedUser === 0) {
            return res.status(404).json({ message: 'User no encontrado' });
        }

        res.status(200).json({ message: 'User eliminado con éxito' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error eliminando el user', error: error.message });
    }
};
