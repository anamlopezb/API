import  SecondInstallmentGetter  from '../business/Practices/SecondInstallmentGetter.js';
import  {Second_Installment}  from '../models/Second_Installment.js'

class SecondInstallmentController {
    async getSecondInstallments(req, res) {
        try {
            // Crear una nueva instancia del getter para obtener los datos
            const getter = new SecondInstallmentGetter();
            // Llamar al método 'get' del getter para obtener los resultados
            const results = await getter.get();

            // Enviar una respuesta exitosa con los resultados obtenidos
            return res.status(200).json({
                success: true,
                data: results,
            });
        } catch (error) {
            // Si ocurre un error, mostrar el mensaje en la consola
            console.error('Error al obtener el dato:', error);


            return res.status(500).json({
                success: false,  // Indica que la operación falló
                message: 'Ocurrió un error al procesar la solicitud.',  // Mensaje de error
                error: error.message,
            });
        }
    }
    async createSecondInstallment(req, res) {
        try {
            console.log("Datos recibidos:", req.body);
    
            // Lista completa de campos que deben ser cadenas de texto
            const textFields = [
                'difficulties', 'progresspercentage', 'currentactivity', 'pendingactivities',
                'alignmentlevel', 'activityresponse', 'taskrelevance', 'taskrelevanceexplanation',
                'supervisionlevel', 'supervisiondetails', 'planprogress', 'scopemaintained',
                'newscopeobjective', 'teacherguidance'
            ];
    
            // Validar que todos los campos sean cadenas de texto no vacías
            const invalidFields = textFields.filter(field => {
                const value = req.body[field];
                return typeof value !== 'string' || !value.trim();
            });
    
            if (invalidFields.length > 0) {
                return res.status(400).json({
                    error: "Campos inválidos",
                    invalidFields: invalidFields
                });
            }
    
            // Si todas las validaciones pasan, crear el registro
            const secondInstallmentData = req.body;
            const newSecondInstallment = await Second_Installment.create(secondInstallmentData);
    
            res.status(201).json({
                success: true,
                message: "Registro creado exitosamente",
                data: newSecondInstallment
            });
    
        } catch (error) {
            console.error("Error al crear la segunda entrega:", error);
            res.status(500).json({
                success: false,
                message: "Error al procesar la solicitud",
                error: error.message,
            });
        }
    }
    
}

export const secondInstallmentController = new SecondInstallmentController();
