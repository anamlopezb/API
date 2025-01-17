import { User } from '../../models/User.js';
class UserUpdate {
  
    // Actualizar un usuario existente
    async update(id, primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, id_rol) {
        let result = await User.update(
            { 
                primer_nombre, 
                segundo_nombre, 
                primer_apellido, 
                segundo_apellido, 
                id_rol 
            },
            { where: { id: id } }
        );
        return result;
    }
}

export default UserUpdate;
