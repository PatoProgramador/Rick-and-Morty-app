import Character from "../../../models/Character.js";
// import Episode from "../../../models/Episode.js";
// import Location from "../../../models/Location.js";

export const getAllCharacters = async (req, res) => {
    let options = {
        page: 1,
        limit: 10
    };
    try {
        let characters = await Character.paginate({}, options);
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
    await Character.insertMany(charArr);


-- Codigo actualizar los characters con la simulacion de la relacion en mongo con los episodes--

-- En este codigo se buscan todos los episodios y se comparan con el array de episodes que tiene 
-- cada character, cada url contiene al final el id de cada episodio por lo que no es necesario 
-- un axios, sino hacer un split y buscar en los docs de episodios


        let characters = await Character.find({});
        let episodes = await Episode.find({});

        episodes = episodes.map((epi) => {
            return {
                id: epi._id,
                apiID: epi.apiID,
                name: epi.name,
                episode: epi.episode
            }
        })

        characters = characters.map((charac) => {
            let parserEpisodes = charac.episodes.map((url) => {
                const parts = url.split("/");
                return parseInt(parts[parts.length - 1]);
            })
            return {
                id: charac._id,
                episodes: parserEpisodes
            }
        });

        characters.forEach((charac) => {
            charac.episodes = charac.episodes.map((episodeID) => {
                const episode = episodes.find((epi) => epi.apiID === episodeID);
                if(episode) {
                    return {
                        id: episode.id,
                        apiID: episode.apiID,
                        name: episode.name,
                        episode: episode.episode
                    }
                }
                return null;
            }).filter(Boolean)
        })

        for (const key in characters) {
            let id = characters[key].id;
            let update = characters[key].episodes;
            let doc = await Character.findOneAndUpdate({ _id: id }, {episodes: update});
            console.log(doc)
        }
*/
