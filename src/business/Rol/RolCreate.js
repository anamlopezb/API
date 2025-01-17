import { Rol } from '../../models/Rol.js';

class RolCreate {
    
    // Crear un nuevo rol
    async create(nombre_rol) {
        let result = await Rol.create({ nombre_rol });
        return result;
    }

   
}

export default RolCreate;
