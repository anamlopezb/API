import First_installmentGetter from "../business/Practices/first-installmentGetter";

export const getFirst_installmentGetter = async (req, res) => {
    try {
        let first_installmentGetter = new First_installmentGetter();

        let first_installment = await first_installmentGetter.get();

        res.status(200).json(first_installment);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Error recuperando la primera entrega',
            error: error.message,
        });
    }
};
