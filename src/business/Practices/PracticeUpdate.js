import { Practice } from "../../models/Practice.js";

class PracticeUpdate {
    async update(id, updatedFields) {
        try {
            const practice = await Practice.findByPk(id);
            if (!practice) {
                throw new Error('Practice not found');
            }
            await practice.update(updatedFields);
            return practice;
        } catch (error) {
            throw new Error('Error updating practice: ' + error.message);
        }
    }
}

export default PracticeUpdate;
