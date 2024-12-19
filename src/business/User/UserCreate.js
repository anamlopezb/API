import { User } from '../../models/User.js';

class UserCreate {
    
    // Crear un nuevo usuario
    async create(primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, id_rol) {
        let result = await User.create({ 
            primer_nombre, 
            segundo_nombre, 
            primer_apellido, 
            segundo_apellido, 
            id_rol 
        });
        return result;
    }
}

export default UserCreate;
