import { Final_report } from "../../../models/final-report-tec";

exports.Final_reportCREATED = async (req, res) => {
    try {
      const newFinalReport = await Final_report.create(req.body);
      res.status(201).json(newFinalReport);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  