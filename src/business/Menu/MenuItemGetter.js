import { MenuItem } from '../../models/MenuItem.js';

class MenuItemGetter {
    // Método para obtener todos los items del menú
    async get() {
        try {
            let results = await MenuItem.findAll();
            return results;
        } catch (error) {
            throw new Error('Error recuperando los items del menú: ' + error.message);
        }
    }

    // Método para obtener un item de menú por su ID
    async getById(id) {
        try {
            let result = await MenuItem.findOne({
                where: { id }
            });
            return result;
        } catch (error) {
            throw new Error('Error recuperando el item del menú: ' + error.message);
        }
    }

}

export default MenuItemGetter;
