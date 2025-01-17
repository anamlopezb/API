import { Company } from '../../models/Company.js';
import { Offer } from '../../models/Offer.js';
import { Postulation } from '../../models/Postulation.js';
import { Practice } from '../../models/Practice.js';
import { PracticeLevel } from '../../models/PracticeLevel.js';
import { PracticeMode } from '../../models/PracticeMode.js';
import { PracticeStatus } from '../../models/PracticeStatus.js';
import { User } from '../../models/User.js';
class PracticeGetter {
    async getAll() {
        try {
            const results = await Practice.findAll({
                include: [
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
                                attributes: ['id_nivel_practica', 'id_modalidad_practica', 'id_empresa']
                            }
                        ],
                        attributes: ['id_oferta']
                    },
                    { model: PracticeStatus, as: "estado_practica", attributes: ['nombre'] }
                ],
                attributes: ['fecha_inicio', 'fecha_fin']
            });

            return results;
        } catch (error) {
            throw new Error('Error fetching practices: ' + error.message);
        }
    }

    async getById(id) {
        try {
            const practice = await Practice.findByPk(id, {
                include: [
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
                                attributes: ['id_nivel_practica', 'id_modalidad_practica', 'id_empresa']
                            }
                        ],
                        attributes: ['id_oferta']
                    },
                    { model: PracticeStatus, as: "estado_practica", attributes: ['nombre'] }
                ],
                attributes: ['fecha_inicio', 'fecha_fin']
            });

            if (!practice) {
                throw new Error('Practice not found');
            }

            return practice;
        } catch (error) {
            throw new Error('Error fetching practice by ID: ' + error.message);
        }
    }

  // Obtener la práctica activa de un estudiante
  async getActivePracticeByStudent(userId) {
    try {
        const activePractice = await Practice.findOne({
            where: {
                id_usuario: userId,
                id_estado_practica: 1, 
            },
            include: [
                {
                    model: User,
                    as: 'usuario',
                    attributes: ['id', 'primer_nombre', 'primer_apellido'],
                },
                {
                    model: PracticeStatus,
                    as: "estado_practica",
                    attributes: ['nombre'],
                }
            ],
            attributes: ['id', 'fecha_inicio', 'fecha_fin']
        });

        return activePractice;
    } catch (error) {
        throw new Error('Error fetching active practice for student: ' + error.message);
    }
}



}

export default PracticeGetter;