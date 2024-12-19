import { Company } from '../../models/Company.js';
import { Offer } from '../../models/Offer.js';
import { Postulation } from '../../models/Postulation.js';
import { Practice } from '../../models/Practice.js';
import { PracticeLevel } from '../../models/PracticeLevel.js';
import { PracticeMode } from '../../models/PracticeMode.js';
import { PracticeStatus } from '../../models/PracticeStatus.js';
import { User } from '../../models/User.js';


class PracticeGetter {
    async get() {
        let results = await Practice.findAll({
            include: [
                { model: User, as: "usuarios", attributes: ['primer_nombre', 'segundo_nombre', 'primer_apellido', 'segundo_apellido' ] },
                {
                    model: Postulation,
                    as: "postulacion",
                    include: [
                        {
                            model: Offer,
                            as: "oferta",
                            include: [
                                { model: PracticeLevel, as: "nivel_practica", attributes: ['nombre'] },
                                { model: PracticeMode, as: "modalidad_practica", attributes: ['nombre'] },
                                { model: Company, as: "empresa", attributes: ['nombre'] }
                            ],
                            attributes: ['id_nivel_practica',
                                'id_modalidad_practica',
                                'id_empresa']
                        }
                    ],
                    attributes: ['id_oferta', 'id_usuario']
                },
                { model: PracticeStatus, as: "estado_practica", attributes: ['nombre'] },

            ],
            attributes: [
                'fecha_inicio',
                'fecha_fin',  
            ]



        });


        return results;
    }
}
export default PracticeGetter;