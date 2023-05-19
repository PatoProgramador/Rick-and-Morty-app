import Character from "../../models/Character.js";

export const getAllCharacters = async (req, res) => {
    try {
        const characters = await Character.find({});
        if (characters.length === 0) {
            throw new Error('No existen personajes en la base de datos aún');
        }
        return res.status(200).json(characters)
    } catch (error) {
        return res.status(400).json(error.message)
    }
};

export const getCharacterById = async (req, res) => {
    const { id } = req.params
    try {
        const charac = await Character.findById(id).exec();
        return res.status(200).json(charac)
    } catch (error) {
        return res.status(400).json(error.message)
    }
};