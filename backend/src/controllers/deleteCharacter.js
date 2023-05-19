import Character from "../../models/Character.js";

export const deleteCharacter = async(req, res) => {
    const { id } = req.params;
    try {
        let characToDelete = await Character.deleteOne({_id: id});
        if(characToDelete.deletedCount === 1) {
            res.status(200).json("El personaje se eliminó correctamente")
        } else {
            throw new Error("Ocurrió un error eliminando el personaje")
        };
    } catch (error) {
        return res.status(400).json(error.message)
    }
};