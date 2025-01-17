import { Practice } from "../../models/Practice.js";

class PracticeCreate {
    async create(id_usuario, id_modalidad, id_ciclo, id_docente, nombre_empresa, fecha_inicio, fecha_fin, id_estado_practica) {
        try {
            const newPractice = await Practice.create({
                id_usuario,
                id_modalidad,
                id_ciclo,
                id_docente,
                nombre_empresa,
                fecha_inicio,
                fecha_fin,
                id_estado_practica
            });
            return newPractice;
        } catch (error) {
            throw new Error('Error creating practice: ' + error.message);
        }
    }
}

export default PracticeCreate;
