
import { TeacherStudent } from "../models/TeacherStudent.js";
import { User } from "../models/User.js";

export const getTeacherStudents = async (req, res) => {
    const { id_docente } = req.params;  // Obtenemos el id_docente desde los parámetros de la URL

    try {
        // Verificar que el docente exista
        const docente = await User.findByPk(id_docente);
        if (!docente) {
            return res.status(404).json({ message: 'Docente no encontrado' });
        }

        // Obtener los estudiantes asociados al docente
        const teacherStudent = await TeacherStudent.findAll({
            where: { id_docente },
            include: [
                {
                    model: User,
                    as: 'estudiante', // Asociamos el estudiante con el alias 'estudiante'
                    attributes: ['id', 'primer_nombre', 'primer_apellido'] // Asegúrate de que estos campos existan en el modelo User
                }
            ]
        });

        if (teacherStudent.length === 0) {
            return res.status(404).json({ message: 'No hay estudiantes asociados a este docente' });
        }

        // Extraer solo los estudiantes (no la relación completa)
        const student = teacherStudent.map(de => de.estudiante);

        res.status(200).json(student);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener los estudiantes asociados al docente', error: error.message });
    }
};
