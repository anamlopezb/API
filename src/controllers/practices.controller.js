import PracticeGetter from '../business/Practices/PracticeGetter.js';
import PracticeModesGetter from '../business/Practices/PracticeModesGetter.js';

export const getPractices = async (req, res) => {
    try {
        let practiceGetter = new PracticeGetter();
        let practices = await practiceGetter.get();
        res.status(200).json(practices);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error recuperando las prácticas', error: error.message });
    }
};

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