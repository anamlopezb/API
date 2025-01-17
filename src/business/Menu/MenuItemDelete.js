import { MenuItem } from '../../models/MenuItem.js';

class MenuItemDelete {
  
    // Método para eliminar un item de menú por su ID
    async delete(id) {
        try {
            let deletedMenuItem = await MenuItem.destroy({
                where: { id }
            });
            return deletedMenuItem;
        } catch (error) {
            throw new Error('Error eliminando el item del menú: ' + error.message);
        }
    }
}

export default MenuItemDelete;
