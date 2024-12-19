// index.js
import app from './app.js';
import practicasDB from './database/database.js'; // Cambia esto
import { Company } from './models/Company.js';
import { MenuItem } from './models/MenuItem.js';
import { Offer } from './models/Offer.js';
import { Postulation } from './models/Postulation.js';
import { Practice } from './models/Practice.js';
import { PracticeLevel } from './models/PracticeLevel.js';
import { PracticeMode } from './models/PracticeMode.js';
import { PracticeStatus } from './models/PracticeStatus.js';
import { Rol } from './models/Rol.js';
import { User } from './models/User.js';
import { UserPracticeLevel } from './models/UserPracticeLevel.js';
import { UserPracticeMode } from './models/UserPracticeMode.js';
import { RolMenuItem } from './models/RolMenuItem.js';
import { ModalitiesForm } from './models/ModalitiesForm.js';
import { TeacherStudent } from './models/TeacherStudent.js';

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

// Relaciones entre Usuario y Rol
Rol.hasMany(User, { foreignKey: 'id_rol', as: 'usuarios' });
User.belongsTo(Rol, { foreignKey: 'id_rol', as: 'roles' });

// Relaciones entre Rol y MenuItem
Rol.belongsToMany(MenuItem, { through: 'RolMenuItem', foreignKey: 'id_rol', as: 'menuItems' });
MenuItem.belongsToMany(Rol, { through: 'RolMenuItem', foreignKey: 'id_menu_item', as: 'roles' });

// Relaciones entre RolMenuItem y sus modelos relacionados
Rol.hasMany(RolMenuItem, { foreignKey: 'id_rol', as: 'rolMenuItems' });
RolMenuItem.belongsTo(Rol, { foreignKey: 'id_rol', as: 'rol' });

// Relaciones entre MenuItem y RolMenuItem
MenuItem.hasMany(RolMenuItem, { foreignKey: 'id_menu_item', as: 'rolMenuItems' });
RolMenuItem.belongsTo(MenuItem, { foreignKey: 'id_menu_item', as: 'menuItem' });

// Relaciones entre User y DocenteEstudiante
User.hasMany(TeacherStudent, { foreignKey: 'id_docente', as: 'estudiantes' });
TeacherStudent.belongsTo(User, { foreignKey: 'id_docente', as: 'docente' });

// Relaciones entre User y DocenteEstudiante
User.hasMany(TeacherStudent, { foreignKey: 'id_estudiante', as: 'docentes' });
TeacherStudent.belongsTo(User, { foreignKey: 'id_estudiante', as: 'estudiante'});

// Relaciones entre Usuario y FormularioModalidad
User.hasMany(ModalitiesForm, { foreignKey: 'id_usuario', as: 'formulariosModalidad' });
ModalitiesForm.belongsTo(User, { foreignKey: 'id_usuario', as: 'usuario' });

// Relaciones entre Modalidad y FormularioModalidad
PracticeMode.hasMany(ModalitiesForm, { foreignKey: 'id_modalidad', as: 'formulariosModalidad' });
ModalitiesForm.belongsTo(PracticeMode, { foreignKey: 'id_modalidad', as: 'modalidad' });

// Relaciones entre FormularioModalidad y Practica
ModalitiesForm.hasMany(Practice, { foreignKey: 'id_modalidad', as: 'practicas' });
Practice.belongsTo(ModalitiesForm, { foreignKey: 'id_modalidad', as: 'formularioModalidad' });

// Relaciones entre FormularioModalidad y Usuario (relación de completar formulario)
User.hasMany(ModalitiesForm, { foreignKey: 'id_usuario', as: 'formulariosModalidadCompletados' });
ModalitiesForm.belongsTo(User, { foreignKey: 'id_usuario', as: 'usuarioCompleta' });


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