export const getCharacters = async (req, res) => {
    try {
        return res.status(200).json("Holas")
    } catch (error) {
        return res.status(400).json("D;")
    }
};