import { Rol } from '../../models/Rol.js';

class RolDelete {  
    // Eliminar un rol
    async delete(id) {
        let result = await Rol.destroy({
            where: { id: id }
        });
        return result;
    }
}

export default RolDelete;
