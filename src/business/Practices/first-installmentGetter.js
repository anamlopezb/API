import { Manager_practices } from '../../models/manager-practices.js';
import { First_installment } from '../../models/first-installment.js';
import { User } from '../../models/User.js';

class First_installmentGetter {
    async get() {
        let results = await First_installment.findAll({
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

export default First_installmentGetter;