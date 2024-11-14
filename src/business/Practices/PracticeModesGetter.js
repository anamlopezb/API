import { PracticeMode } from '../../models/PracticeMode.js';

class PracticeModesGetter {
    async get() {
        let results = await PracticeMode.findAll({
            order: [['nombre', 'ASC']]
        });
        return results;
    }
}

export default PracticeModesGetter;