import { Rol } from '../../models/Rol.js';

class RolUpdate {  
    // Actualizar un rol existente
    async update(id, nombre_rol) {
        let result = await Rol.update(
            { nombre_rol },
            { where: { id: id } }
        );
        return result;
    }
}

export default RolUpdate;
