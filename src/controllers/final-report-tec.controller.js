import Final_reportGetter from "../business/Practices/final-report-tecGetter";

export const getFinal_reportGetter = async (req, res) => {
    try {
        let final_reportGetter = new Final_reportGetter();

        let Final_report = await final_reportGetter.get();

        res.status(200).json(Final_report);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Error recuperando el formulario final',
            error: error.message,
        });
    }
};
