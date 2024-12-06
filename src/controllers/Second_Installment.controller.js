import { SecondInstallmentGetter } from '../business/Practices/SecondInstallmentGetter.js';

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
}

export const secondInstallmentController = new SecondInstallmentController();
