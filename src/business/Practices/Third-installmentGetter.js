import { Manager_practices } from '../../models/manager-practices.js';
import { Third_installment } from '../../models/third-installment.js';
import { User } from '../../models/User.js';

class Third_installmentGetter {
    async get() {
        let results = await Third_installment.findAll({
            include:[
                { 
                    model: Manager_practices, 
                    as: "gestion_practicas", 
                    include: [
                        { model: User, as: "usuarios", attributes: ['primer_nombre', 'segundo_nombre', 'primer_apellido', 'segundo_apellido' ] },
                    ],
                    attributes: ['id_usuario','nombre'] 
                },
            ],
            attributes: ['id_gestipon_practicas', 'nombre'] 

            
        });
        return results;
    }
}

export default Third_installmentGetter;