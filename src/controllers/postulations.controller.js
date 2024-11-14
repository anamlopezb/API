import { Postulation } from "../models/Postulation.js";

export const getPostulations = async (req, res) => {
    const postulations = await Postulation.findAll();
    res.send(postulations);
}