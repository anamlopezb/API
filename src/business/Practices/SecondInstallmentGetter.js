import { User } from '../../models/User.js';
import { PracticeLevel } from '../../models/PracticeLevel.js';
import { Second_Installment } from '../../models/Second_Installment.js';
import { UserPracticeLevel } from '../../models/UserPracticeLevel.js';

class SecondInstallmentGetter {
    async get() {
        let results = await User.findAll({
            include: [
                {
                    model: UserPracticeLevel,
                    as: "niveles_practica_usuario", // Alias para la relación
                    include: [
                        {
                            model: PracticeLevel,
                            as: "nivel_practica",
                            attributes: ['nombre']
                        }
                    ],
                    attributes: [
                        'id', 
                        'id_nivel_practica'
                    ]
                },
                {
                    model: Second_Installment,
                    as: "segunda_entrega", // Alias para Second_Installment
                    attributes: [
                        // Campos de la tabla
                        'estado', 
                        'documento', 
                        'fechaCargue', 
                        'observaciones', 
                        // Campos del formulario
                        'progressPercentage', 
                        'currentActivity', 
                        'pendingActivities', 
                        'difficulties', 
                        'alignmentLevel', 
                        'activityResponse', 
                        'taskRelevance', 
                        'taskRelevanceExplanation', 
                        'supervisionLevel', 
                        'supervisionDetails', 
                        'planProgress', 
                        'scopeMaintained', 
                        'newScopeObjective', 
                        'teacherGuidance'
                    ]
                }
            ],
            attributes: [
                'id', 
                'nombre', 
                'email' // Campos básicos del usuario
            ]
        });

        return results;
    }
}

export default SecondInstallmentGetter;
