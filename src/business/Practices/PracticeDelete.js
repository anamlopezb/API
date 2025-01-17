import { Practice } from "../../models/Practice.js";

class PracticeDelete {
    async delete(id) {
        try {
            const practice = await Practice.findByPk(id);
            if (!practice) {
                throw new Error('Practice not found');
            }
            await practice.destroy();
            return { message: 'Practice deleted successfully' };
        } catch (error) {
            throw new Error('Error deleting practice: ' + error.message);
        }
    }
}

export default PracticeDelete;
