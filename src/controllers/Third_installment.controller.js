import Third_installmentGetter from '../business/Third_installment/Third_installmentGetter.js';

export const getThirdInstallmentsGetter = async (req, res) => {
    try {
        let thirdInstallmentGetter = new Third_installmentGetter();

        let thirdInstallments = await thirdInstallmentGetter.get();

        res.status(200).json(thirdInstallments);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Error recuperando la tercera entrega',
            error: error.message,
        });
    }
};
