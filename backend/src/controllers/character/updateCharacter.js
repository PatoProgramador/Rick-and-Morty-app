import Character from "../../../models/Character.js";

export const updateCharacter = async(req, res) => {
    const { id } = req.params;
    const { name, img, status, gender, origin, location} = req.body;
    try {
        let update = {
            name,
            img,
            status,
            gender,
            origin,
            location
        };
        let characUpdate;
        // validacion
        let len = Object.keys(req.body).length;
        if (len === 0) {
            throw new Error('Debes pasar los datos que deseas actualizar del personaje :)')
        };
        // update..
        characUpdate = await Character.updateOne(
            {_id: id},
            {
                ...update
            }
        );

        if(characUpdate.modifiedCount === 1) {
            return res.status(200).json("El personaje se actualizó correctamente")
        } else {
            throw new Error("Ocurrió un error actualizando el personaje :/")
        }
    } catch (error) {
        return res.status(400).json(error.message)
    }
};