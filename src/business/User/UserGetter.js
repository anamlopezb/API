import { User } from '../../models/User.js';

class UserGetter {
    // Obtener todos los usuarios
    async get() {
        let results = await User.findAll();
        return results;
    }

    // Obtener un usuario por su id
    async getById(id) {
        let result = await User.findOne({
            where: { id: id }
        });
        return result;
    }

    // Obtener un usuario por su rol
    async getByRol(rolId) {
        const results = await User.findAll({
            where: { id_rol: rolId }
        });
        return results;
    }

    // Obtener el rol de un usuario por su id
    async getRoleByUserId(id) {
        const user = await User.findOne({
            where: { id: id },
            include: ['roles']  // Suponiendo que tienes una relación con el modelo Role
        });

        if (!user) {
            throw new Error('Usuario no encontrado');
        }

        return { roleId: user.id_rol }; // O el campo que corresponde al rol
    }
}

export default UserGetter;
