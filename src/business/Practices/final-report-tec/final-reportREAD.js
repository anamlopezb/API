import { Final_report } from "../../../models/final-report-tec";

exports.getAllFinalReports = async (req, res) => {
    try {
      const finalReports = await Final_report.findAll();
      res.json(finalReports);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };