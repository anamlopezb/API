import { Final_report } from "../../../models/final-report-tec";

exports.FinalReportdelete = async (req, res) => {
  try {
    const rowsDeleted = await Final_report.destroy({ where: { id: req.params.id } });
    if (!rowsDeleted) return res.status(404).json({ message: 'Informe no encontrado' });
    res.json({ message: 'Informe final eliminado con éxito' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};