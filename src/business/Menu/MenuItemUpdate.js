import { MenuItem } from '../../models/MenuItem.js';

class MenuItemUpdate {
    
    // Método para actualizar un item de menú por su ID
    async update(id, nombre_item, enlace, descripcion) {
        try {
            let updatedMenuItem = await MenuItem.update(
                { nombre_item, enlace, descripcion },
                { where: { id } }
            );
            return updatedMenuItem;
        } catch (error) {
            throw new Error('Error actualizando el item del menú: ' + error.message);
        }
    }

}

export default MenuItemUpdate;
