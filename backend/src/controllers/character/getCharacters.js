import Character from "../../../models/Character.js";

export const getAllCharacters = async (req, res) => {
    let options = {
        page: 1,
        limit: 10
    };
    try {
        const characters = await Character.paginate({}, options);
        if (characters.docs.length === 0) {
            throw new Error('No existen personajes en la base de datos aún');
        }

        return res.status(200).json(characters)
    } catch (error) {
        return res.status(400).json(error.message)
    }
};

export const getCharacterById = async (req, res) => {
    const { id } = req.params;
    try {
        const charac = await Character.findById(id).exec();
        return res.status(200).json(charac)
    } catch (error) {
        return res.status(400).json(error.message)
    }
};

/* 
-- Codigo para poblar la database con los character de la API--

    -- axios para hacer fetch --
    import axios from 'axios';

    -- fetch de una url para mirar cuantas pages hay y asi traerlos todos --
    const urlA = 'https://rickandmortyapi.com/api/character/?page=1'
    let apiUrls = [];
    let apiResult = await axios.get(urlA);

    -- todas las url, usando en paginado de la api para hacer un solo fetch --
    for (let i = 1; i <= apiResult.data.info.pages; i++) {
        apiUrls = [...apiUrls, `https://rickandmortyapi.com/api/character/?page=${i}`]
    }

    -- fetch de todos los personajes en la API --
    let charArr = apiUrls.map((url) => axios.get(url));
    charArr = await Promise.all(charArr);
    charArr = charArr?.map((response) => response.data.results).flat();

    -- modificando el array de acuerdo al modelo --
    charArr = charArr?.map((charac) => {
        return {
            apiID: charac.id,
            name: charac.name,
            img: charac.image,
            status: charac.status,
            species: charac.species,
            gender: charac.gender,
            origin: {
                name: charac.origin.name,
                apiUrl: charac.origin.url
            },
            location: {
                name: charac.location.name,
                apiUrl: charac.location.url
            },
            episodes: charac.episode
        }
    });

    -- insertando todos los documentos en el modelo --
    Character.insertMany(charArr);
*/