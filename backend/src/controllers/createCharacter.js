import Character from "../../models/Character.js";

export const createCharacter = async (req, res) => {
    if(!req.body) throw new Error('Debes pasar los campos necesarios para crear el personaje');

    const { name, img, status, gender, origin, location  } = req.body;
    try {
        const validate = {
            name,
            img,
            status,
            gender,
            origin,
            location
        };

        // validacion de campos necesarios
        for(const key in validate) {
            const element = validate[key];
            if(!element && key !== "gender" && key !== "location" && key !== "img") {
                throw new Error(`El campo -${key}- no puede estar vacío`)
            }
        };

        const newCharacter = new Character(validate);
        await newCharacter.save();

        return res.status(200).json(newCharacter)
    } catch (error) {
        return res.status(400).json(error.message)
    }
};
