import Episode from "../../../models/Episode.js";

export const getAllEpisodes = async (req, res) => {
    try {
        const episodes = await Episode.find({});
        return res.status(200).json(episodes);
    } catch (error) {
        return res.status(400).json(error.message);
    }
};

/* 
-- Codigo para poblar la database con los episodes de la API--

    -- axios para hacer fetch --
    import axios from 'axios';

    -- fetch de una url para mirar cuantas pages hay y asi traerlos todos --
    const urlA = 'https://rickandmortyapi.com/api/episode?page=1'
    let apiUrls = [];
    let apiResult = await axios.get(urlA);

    -- todas las url, usando en paginado de la api para hacer un solo fetch --
    for (let i = 1; i <= apiResult.data.info.pages; i++) {
        apiUrls = [...apiUrls, `https://rickandmortyapi.com/api/episode?page=${i}`]
    }

    -- fetch de todos los personajes en la API --
    let charArr = apiUrls.map((url) => axios.get(url));
    charArr = await Promise.all(charArr);
    charArr = charArr?.map((response) => response.data.results).flat();

    -- modificando el array de acuerdo al modelo --
    let epiArr = apiUrls.map((url) => axios.get(url));
    epiArr = await Promise.all(epiArr);
    epiArr = epiArr?.map((response) => response.data.results).flat();
    
    epiArr = epiArr?.map((episode) => {
        return {
            apiID: episode.id,
            name: episode.name,
            airDate: episode.air_date,
            episode: episode.episode,
            characters: episode.characters
        }
    });

    -- insertando todos los documentos en el modelo --
    Episode.insertMany(epiArr);
*/