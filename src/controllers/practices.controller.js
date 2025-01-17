import PracticeGetter from '../business/Practices/PracticeGetter.js';
import PracticeCreate from '../business/Practices/PracticeCreate.js';
import PracticeUpdate from '../business/Practices/PracticeUpdate.js';
import PracticeDelete from '../business/Practices/PracticeDelete.js';
import PracticeModesGetter from '../business/Practices/PracticeModesGetter.js';

export const getPractices = async (req, res) => {
    try {
        let practiceGetter = new PracticeGetter();
        let practices = await practiceGetter.getAll();
        res.status(200).json(practices);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error recuperando las prácticas', error: error.message });
    }
};

export const getPracticeById = async (req, res) => {
    try {
        const { id } = req.params;
        let practiceGetter = new PracticeGetter();
        let practice = await practiceGetter.getById(id);

        if (!practice) {
            return res.status(404).json({ message: 'Práctica no encontrada' });
        }

        res.status(200).json(practice);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error recuperando la práctica', error: error.message });
    }
};

export const createPractice = async (req, res) => {
    try {
        const { id_usuario, id_modalidad, id_ciclo, id_docente, nombre_empresa, fecha_inicio, fecha_fin, id_estado_practica } = req.body;

        if (!id_usuario || !id_modalidad || !id_ciclo || !id_docente || !nombre_empresa || !fecha_inicio || !fecha_fin || !id_estado_practica) {
            return res.status(400).json({ message: 'Todos los campos son obligatorios' });
        }

        let practiceCreate = new PracticeCreate();
        let newPractice = await practiceCreate.create(id_usuario, id_modalidad, id_ciclo, id_docente, nombre_empresa, fecha_inicio, fecha_fin, id_estado_practica);

        res.status(201).json(newPractice);
    } catch (error) {
        console.error('Error al crear la práctica:', error);
        res.status(500).json({ message: 'Error creando la práctica', error: error.message });
    }
};


export const updatePractice = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedFields = req.body;

        if (Object.keys(updatedFields).length === 0) {
            return res.status(400).json({ message: 'Debe proporcionar al menos un campo para actualizar' });
        }

        let practiceUpdate = new PracticeUpdate();
        let updatedPractice = await practiceUpdate.update(id, updatedFields);

        res.status(200).json({ message: 'Práctica actualizada con éxito', updatedPractice });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error actualizando la práctica', error: error.message });
    }
};

export const deletePractice = async (req, res) => {
    try {
        const { id } = req.params;

        let practiceDelete = new PracticeDelete();
        let result = await practiceDelete.delete(id);

        res.status(200).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error eliminando la práctica', error: error.message });
    }
};

// Modalidades
export const getPracticeModes = async (req, res) => {
    try {
        let practiceModesGetter = new PracticeModesGetter();
        let practiceModes = await practiceModesGetter.get();
        res.status(200).json(practiceModes);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error recuperando las modalidades de las prácticas', error: error.message });
    }
};

// Método para obtener la práctica activa de un estudiante
export const getActivePracticeByStudent = async (req, res) => {
    const { userId } = req.params;

    if (!userId) {
      return res.status(400).json({ message: 'El ID del usuario es requerido.' });
    }
  
    try {
      let practiceGetter = new PracticeGetter();
      const activePractice = await practiceGetter.getActivePracticeByStudent(userId);
  
      if (!activePractice) {
        return res.status(404).json({ message: 'No se encontró una práctica activa para el estudiante.' });
      }
  
      return res.status(200).json(activePractice);
    } catch (error) {
      console.error('Error en getActivePracticeByStudent:', error);
      return res.status(500).json({ message: 'Error al obtener la práctica activa', error: error.message });
    }
  };
