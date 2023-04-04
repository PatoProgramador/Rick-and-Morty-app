const { mongoConect } = require("../../config/mongodb");
const character = require('../../models/Character');

const createCharacter = async (event) => {
    if(!event.body) return {
        statusCode: 400,
        body: JSON.stringify({"error": "Debes pasar los campos necesarios para crear el personaje"});
    };
    const { name, img, status, gender, origin, location  } = event.body;
    try {
        mongoConect(process.env.MONGO_URI);

        const validate = {
            name,
            img,
            status,
            gender,
            origin,
            location
        };

        for(const key in validate) {
            const element = validate[key];
            if(!element && key !== "gender" && key !== "location") {
                
            }
        };

    } catch (error) {
        
    }
};

module.exports = { createCharacter };