import { Final_report } from '../../models/final-report-tec.js';
import { Manager_practices } from '../../models/manager-practices.js';
import { Third_installment } from '../../models/third-installment.js';
import { User } from '../../models/User.js';

class Final_reportGetter {
    async get() {
        let results = await Final_report.findAll({
            include:[
                {
                    model: Third_installment,
                    as: 'tercera_entrega',
                    include:
                    [
                        { 
                            model: Manager_practices, 
                            as: "gestion_practicas", 
                            include: [
                                { model: User, as: "usuarios", attributes: ['primer_nombre', 'segundo_nombre', 'primer_apellido', 'segundo_apellido' ] },
                            ],
                            attributes: ['id_usuario','nombre'] 
                        },
                    ],
                    attributes:[
                        'id_tercera_entrega',
                        'id_nivel_practica'
                    ]
                    
                },
                { model: PracticeLevel, as: "nivel_practica", attributes: ['nombre'] },
            ],
            attributes: [
                'id_tercera_entrega',
                'id_nivel_practica', 
                'nombre'
            ]  
        });
        return results;
    }
}

export default Final_reportGetter;