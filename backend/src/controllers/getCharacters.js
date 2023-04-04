const { mongoConect } = require("../../config/mongodb");

const getCharacters = async (event) => {
    try {
        mongoConect(process.env.MONGO_URI);
        return {
            statusCode: 200,
            body: JSON.stringify("Holi")
        }
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ "Error": error })
        };
    }
};

module.exports = { getCharacters };