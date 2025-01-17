import { MenuItem } from '../../models/MenuItem.js';

class MenuItemCreate {   

    // Método para crear un nuevo item de menú
    async create(nombre_item, enlace, descripcion) {
        try {
            let newMenuItem = await MenuItem.create({
                nombre_item,
                enlace,
                descripcion
            });
            return newMenuItem;
        } catch (error) {
            throw new Error('Error creando el item del menú: ' + error.message);
        }
    }

    
}

export default MenuItemCreate;
