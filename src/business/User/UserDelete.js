import { User } from '../../models/User.js';
class UserDelete {

    // Eliminar un usuario
    async delete(id) {
        let result = await User.destroy({
            where: { id: id }
        });
        return result;
    }
}

export default UserDelete;
