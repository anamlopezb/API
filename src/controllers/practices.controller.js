import PracticeGetter from '../business/Practices/PracticeGetter.js';

export const getPractices = async (req, res) => {
    try {
        let practiceGetter = new PracticeGetter();
        let practices = await practiceGetter.get();
        res.status(200).json(practices);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error recuperando las prácticas', error: error.message }); // Mensaje de error
    }
};
