import { Meetings } from '../../models/meetings.js';
import { User } from '../../models/User.js';
import { Scheduling } from '../../models/scheduling.js';

class MeetingsGetter {
    async get() {
        let results = await Meetings.findAll({
            include:[
                { 
                    model: Scheduling, 
                    as: "agendamientos", 
                    include: [
                        { model: User, as: "usuarios", attributes: ['primer_nombre', 'segundo_nombre', 'primer_apellido', 'segundo_apellido' ] },
                    ],
                    attributes: ['id_usuario','tipo_encuentro','fecha_encuentro','hora_encuentro','nombre'] 
                },
            ],
            attributes: ['id_agendamientos', 'nombre'] 

            
        });
        return results;
    }
}

export default MeetingsGetter;