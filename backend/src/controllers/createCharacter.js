const { mongoConect } = require("../../config/mongodb");
const character = require('../../models/Character');
const middy = require("@middy/core");
const jsonBodyParser = require("@middy/http-json-body-parser");

const createCharacter = async (event) => {
    if(!event.body) return {
        statusCode: 400,
        body: JSON.stringify({"error": "Debes pasar los campos necesarios para crear el personaje"})
    };
    const { name, img, status, gender, origin, location  } = event.body;
    try {
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
                return {
                    statusCode: 400,
                    body: JSON.stringify({ "error": `El campo ${key} no puede estar vacío` })
                };
            }
        };

        const newCharacter = new character(validate);
        await newCharacter.save();

        return {
            statusCode: 200,
            body: JSON.stringify({
                "message": `personaje <${newCharacter.name}> creado correctamente :)`
            })
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ "error": error })
        };
    }
};

module.exports = {
    createCharacter: middy(createCharacter)
    .use(jsonBodyParser()) 
};