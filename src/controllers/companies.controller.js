import { Company } from "../models/Company.js";

export const getCompanies = async (req, res) => {
    try {
        const companies = await Company.findAll();
        res.status(200).json(companies); // Responde con un estado 200 y los datos en formato JSON
    } catch (error) {
        console.error(error); // Loguea el error para depuración
        res.status(500).json({ message: 'Error retrieving companies' }); // Responde con un error 500 si algo falla
    }
};
