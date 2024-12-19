import { MenuItem } from '../../models/MenuItem.js';
import { Rol } from '../../models/Rol.js';
import { RolMenuItem } from '../../models/RolMenuItem.js';

class RolGetter {
    // Obtener todos los roles
    async get() {
        let results = await Rol.findAll();
        return results;
    }

    // Obtener un rol por su id
    async getById(id) {
        let result = await Rol.findOne({
            where: { id: id }
        });
        return result;
    }

    // Obtener para obtener los MenuItem por Rol
    async getMenuItemsByRol(rolId) {
        const results = await MenuItem.findAll({
            include: [
                {
                    model: RolMenuItem,
                    as: 'rolMenuItems',
                    where: { id_rol: rolId },
                    attributes: [] // Atributos de RolMenuItem
                }
            ],
            attributes: ['id', 'nombre_item', 'enlace', 'descripcion'] // Atributos de MenuItem
        });

        return results;
    }

}

export default RolGetter;
