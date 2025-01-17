import RolCreate from '../business/Rol/RolCreate.js';
import RolDelete from '../business/Rol/RolDelete.js';
import RolGetter from '../business/Rol/RolGetter.js'; // Asegúrate de que la ruta sea correcta
import RolUpdate from '../business/Rol/RolUpdate.js';

// Obtener todos los roles
export const getRoles = async (req, res) => {
    try {
        let rolGetter = new RolGetter();
        let roles = await rolGetter.get();
        res.status(200).json(roles);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error recuperando los roles', error: error.message });
    }
};

// Obtener un rol por ID
export const getRolById = async (req, res) => {
    try {
        const { id } = req.params;
        let rolGetter = new RolGetter();
        let rol = await rolGetter.getById(id);
        
        if (!rol) {
            return res.status(404).json({ message: 'Rol no encontrado' });
        }

        res.status(200).json(rol);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error recuperando el rol', error: error.message });
    }
};

// Obtener los MenuItem por Rol
export const getMenuItemsByRol = async (req, res) => {
    try {
        const { rolId } = req.params; // Obtener el rolId de los parámetros de la solicitud

        // Validación básica del rolId (puedes agregar validaciones más robustas)
        if (!rolId) {
            return res.status(400).json({ message: 'El ID del rol es requerido' });
        }

        // Crear una instancia del servicio y llamar al método para obtener los MenuItems
        const menuItemRol = new RolGetter();
        const menuItems = await menuItemRol.getMenuItemsByRol(rolId);

        res.status(200).json(menuItems);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener los MenuItems', error: error.message });
    }
};

// Crear un nuevo rol
export const createRol = async (req, res) => {
    try {
        const { nombre_rol } = req.body;
        
        if (!nombre_rol) {
            return res.status(400).json({ message: 'El nombre del rol es obligatorio' });
        }

        let rolCreate = new RolCreate();
        let newRol = await rolCreate.create(nombre_rol);
        
        res.status(201).json(newRol);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error creando el rol', error: error.message });
    }
};

// Actualizar un rol existente
export const updateRol = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre_rol } = req.body;

        if (!nombre_rol) {
            return res.status(400).json({ message: 'El nombre del rol es obligatorio' });
        }

        let rolUpdate = new RolUpdate();
        let updatedRol = await rolUpdate.update(id, nombre_rol);

        if (updatedRol[0] === 0) {
            return res.status(404).json({ message: 'Rol no encontrado' });
        }

        res.status(200).json({ message: 'Rol actualizado con éxito' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error actualizando el rol', error: error.message });
    }
};

// Eliminar un rol
export const deleteRol = async (req, res) => {
    try {
        const { id } = req.params;
        
        let rolDelete= new RolDelete();
        let deletedRol = await rolDelete.delete(id);

        if (deletedRol === 0) {
            return res.status(404).json({ message: 'Rol no encontrado' });
        }

        res.status(200).json({ message: 'Rol eliminado con éxito' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error eliminando el rol', error: error.message });
    }
};
