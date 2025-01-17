import { Final_report } from '../../models/final-report-tec.js';
class Final_reportGetter {
    async get(filters = {}) {  // Acepta los filtros como parámetro
        let results = await Final_report.findAll({
            where: filters,     // Aplica los filtros a la consulta
            attributes: [
                'id',                     // ID del registro
                'assessment_one',         // Evaluación 1
                'assessment_two',         // Evaluación 2
                'assessment_three',       // Evaluación 3
                'competencies_one',       // Competencias
                'competencies_two',
                'competencies_three',
                'competencies_four',
                'competencies_five',
                'competencies_six',
                'competencies_seven',
                'competencies_eight',
                'observation_one',        // Observaciones
                'observation_two',
                'observation_three',
                'observation_four',
                'observation_five',
                'observation_six',
                'observation_seven',
                'observation_eight',
                'observation_nine',
                'observation_ten',
                'observation_eleven',
                'observation_twelve',
                'indicator_one',          // Indicadores
                'indicator_two',
                'indicator_three',
                'indicator_four',
                'indicator_five',
                'indicator_six',
                'indicator_seven',
                'indicator_eight',
                'indicator_nine',
                'indicator_ten',
                'indicator_eleven',
                'indicator_twelve',
                'indicator_thirteen',
                'indicator_fourteen',
                'indicator_fifteen',
                'indicator_sixteen',
                'indicator_seventeen',
                'indicator_eighteen',
                'indicator_nineteen',
                'indicator_twenty',
                'student_one',            // Información del estudiante
                'student_two',
                'student_three',
                'student_four',
                'student_five',
                'fecha_creacion',         // Fechas
                'fecha_modificacion'
            ],
            logging: console.log // ver la consulta generada

        });
        return results;
    }
}

export default Final_reportGetter;