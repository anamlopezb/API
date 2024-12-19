import { Manager_practices } from '../../models/manager-practices.js';
import { Third_installment } from '../../models/third-installment.js';
import { User } from '../../models/User.js';

class Third_installmentGetter {
    async get() {
        let results = await Third_installment.findAll({
            include: [
                { 
                    model: Manager_practices, 
                    as: "gestion_practica",  // Asegúrate de que el alias 'gestion_practica' esté bien definido en la asociación
                    include: [
                        { 
                            model: User, 
                            as: "usuarios",  // Asegúrate de que 'usuarios' sea el alias correcto
                            attributes: ['primer_nombre', 'segundo_nombre', 'primer_apellido', 'segundo_apellido']
                        },
                    ],
                    attributes: ['id_usuario', 'nombre']
                },
            ],
            attributes: ['id_gestion_practica', 'nombre']  // Corrige el nombre del atributo de la clave foránea (asegúrate de que 'id_gestion_practica' sea correcto)
        });
        return results;
    }
}

export default Third_installmentGetter;
