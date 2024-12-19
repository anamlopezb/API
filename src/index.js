// index.js
import app from './app.js';
import practicasDB from './database/database.js'; // Cambia esto
import { Company } from './models/Company.js';
import { Final_report } from './models/final-report-tec.js';
import { First_installment } from './models/first-installment.js';
import { Manager_practices } from './models/manager-practices.js';
import { Meetings } from './models/meetings.js';
import { Offer } from './models/Offer.js';
import { Postulation } from './models/Postulation.js';
import { Practice } from './models/Practice.js';
import { PracticeLevel } from './models/PracticeLevel.js';
import { PracticeMode } from './models/PracticeMode.js';
import { PracticeStatus } from './models/PracticeStatus.js';
import { Scheduling } from './models/scheduling.js';
import { Third_installment } from './models/third-installment.js';
import { User } from './models/User.js';
import { UserPracticeLevel } from './models/UserPracticeLevel.js';
import { UserPracticeMode } from './models/UserPracticeMode.js';

// Relaciones entre Oferta y Empresa
Offer.belongsTo(Company, { foreignKey: 'id_empresa' });
Company.hasMany(Offer, { foreignKey: 'id_empresa' });

// Relaciones entre Usuario y Postulación
Postulation.belongsTo(User, { foreignKey: 'id_usuario' });
User.hasMany(Postulation, { foreignKey: 'id_usuario' });

// Relaciones entre Oferta y Postulación
Postulation.belongsTo(Offer, { foreignKey: 'id_oferta' });
Offer.hasMany(Postulation, { foreignKey: 'id_oferta' });

// Relaciones entre Postulación y Práctica
Practice.belongsTo(Postulation, { foreignKey: 'id_postulacion', as: 'postulacion'});
Postulation.hasOne(Practice, { foreignKey: 'id_postulacion' });

// Relaciones entre Práctica y Estado de Práctica
Practice.belongsTo(PracticeStatus, { foreignKey: 'id_estado_practica', as: 'estado_practica'});
PracticeStatus.hasMany(Practice, { foreignKey: 'id_estado_practica' });

// Relaciones entre Oferta y Nivel de Práctica
Offer.belongsTo(PracticeLevel, { foreignKey: 'id_nivel_practica', as: 'nivel_practica'});
PracticeLevel.hasMany(Offer, { foreignKey: 'id_nivel_practica' });

// Relaciones entre Oferta y Modalidad de Práctica
Offer.belongsTo(PracticeMode, { foreignKey: 'id_modalidad_practica', as: 'modalidad_practica'});
PracticeMode.hasMany(Offer, { foreignKey: 'id_modalidad_practica' });

// Relaciones entre Usuario y Usuarios Niveles Práctica
UserPracticeLevel.belongsTo(User, { foreignKey: 'id_usuario' });
User.hasMany(UserPracticeLevel, { foreignKey: 'id_usuario' });

// Relaciones entre Usuario y Usuarios Modalidades Práctica
UserPracticeMode.belongsTo(User, { foreignKey: 'id_usuario' });
User.hasMany(UserPracticeMode, { foreignKey: 'id_usuario' });

// Relaciones entre Usuarios Niveles Práctica y Niveles de Práctica
UserPracticeLevel.belongsTo(PracticeLevel, { foreignKey: 'id_nivel_practica' });
PracticeLevel.hasMany(UserPracticeLevel, { foreignKey: 'id_nivel_practica' });

// Relaciones entre Usuarios Modalidades Práctica y Modalidades de Práctica
UserPracticeMode.belongsTo(PracticeMode, { foreignKey: 'id_modalidad_practica' });
PracticeMode.hasMany(UserPracticeMode, { foreignKey: 'id_modalidad_practica' });

// Relaciones entre Usuarios y Agendamientos
Scheduling.belongsTo(User, { foreignKey: 'id_usuario' });
User.hasMany(Scheduling, { foreignKey: 'id_usuario' });

// Relaciones entre Agendamientos y Encuentros
Meetings.belongsTo(Scheduling, { foreignKey: 'id_agendamientos' });
Scheduling.hasMany(Meetings, { foreignKey: 'id_agendamientos' });

// Relaciones entre Gestion de practicas y usuarios
Manager_practices.belongsTo(User, { foreignKey: 'id_usuario' });
User.hasOne(Manager_practices, { foreignKey: 'id_usuario' });

// Relaciones entre Gestion de practica y primera entrega
First_installment.belongsTo(Manager_practices, { foreignKey: 'id_gestion_practica' });
Manager_practices.hasOne(First_installment, { foreignKey: 'id_gestion_practicas' });

// Relaciones entre Gestion de practica y tercera entrega
Third_installment.belongsTo(Manager_practices, { foreignKey: 'id_gestion_practica' });
Manager_practices.hasOne(Third_installment, { foreignKey: 'id_gestion_practicas' });

// Relaciones entre Tercera entrega y formulario final
Final_report.belongsTo(Third_installment, { foreignKey: 'id_gestion_practica' });
Third_installment.hasOne(Final_report, { foreignKey: 'id_gestion_practica' });

// Relaciones entre Niveles practica y formulario final
Final_report.belongsTo(PracticeLevel, { foreignKey: 'id_nivel_practica' });
PracticeLevel.hasOne(Final_report, { foreignKey: 'id_nivel_practica' });


async function main() {
    try {
        await practicasDB.authenticate();
        console.log('Conexión exitosa a la base de datos.');
        app.listen(3000);
        console.log('Escuchando: ', 3000);
    } catch (error) {
        console.log('Error en la conexión de la base de datos', error);
    }
}

main();
