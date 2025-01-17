import MenuItemGetter from '../business/Menu/MenuItemGetter.js';
import MenuItemCreate from '../business/Menu/MenuItemCreate.js';
import MenuItemUpdate from '../business/Menu/MenuItemUpdate.js';
import MenuItemDelete from '../business/Menu/MenuItemDelete.js';

export const getMenuItems = async (req, res) => {
    try {
        let menuItemGetter = new MenuItemGetter();
        let menuItems = await menuItemGetter.get();
        res.status(200).json(menuItems);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error recuperando los items del menú', error: error.message });
    }
};

export const getMenuItemById = async (req, res) => {
    try {
        const { id } = req.params;
        let menuItemGetter = new MenuItemGetter();
        let menuItem = await menuItemGetter.getById(id);
        
        if (!menuItem) {
            return res.status(404).json({ message: 'Item del menú no encontrado' });
        }

        res.status(200).json(menuItem);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error recuperando el item del menú', error: error.message });
    }
};

export const createMenuItem = async (req, res) => {
    try {
        const { nombre_item, enlace, descripcion } = req.body;
        
        if (!nombre_item || !enlace || !descripcion) {
            return res.status(400).json({ message: 'Todos los campos son obligatorios' });
        }

        let menuItemCreate = new MenuItemCreate();
        let newMenuItem = await menuItemCreate.create(nombre_item, enlace, descripcion);
        
        res.status(201).json(newMenuItem);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error creando el item del menú', error: error.message });
    }
};

export const updateMenuItem = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre_item, enlace, descripcion } = req.body;

        if (!nombre_item || !enlace || !descripcion) {
            return res.status(400).json({ message: 'Todos los campos son obligatorios' });
        }

        let menuItemGetter = new MenuItemUpdate();
        let updatedMenuItem = await menuItemGetter.update(id, nombre_item, enlace, descripcion);

        if (updatedMenuItem[0] === 0) {
            return res.status(404).json({ message: 'Item del menú no encontrado' });
        }

        res.status(200).json({ message: 'Item del menú actualizado con éxito' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error actualizando el item del menú', error: error.message });
    }
};

export const deleteMenuItem = async (req, res) => {
    try {
        const { id } = req.params;
        
        let menuItemGetter = new MenuItemDelete();
        let deletedMenuItem = await menuItemGetter.delete(id);

        if (deletedMenuItem === 0) {
            return res.status(404).json({ message: 'Item del menú no encontrado' });
        }

        res.status(200).json({ message: 'Item del menú eliminado con éxito' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error eliminando el item del menú', error: error.message });
    }
};
