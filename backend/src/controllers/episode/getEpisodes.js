import Episode from "../../../models/Episode.js";
// import Character from "../../../models/Character.js";

export const getAllEpisodes = async (req, res) => {
    let options = {
        page: 1,
        limit: 10
    };
    try {
        
        let episodes = await Episode.paginate({}, options)
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

    -- fetch de todos los episodes en la API --
    let epiArr = apiUrls.map((url) => axios.get(url));
    epiArr = await Promise.all(epiArr);
    epiArr = epiArr?.map((response) => response.data.results).flat();

    -- modificando el array de acuerdo al modelo --
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
    await Episode.insertMany(epiArr);



-- Codigo actualizar los episodes con la simulacion de la relacion en mongo con los charac--

-- En este codigo se buscan todos los episodios y se comparan con el array de episodes que tiene 
-- cada character, cada url contiene al final el id de cada episodio por lo que no es necesario 
-- un axios, sino hacer un split y buscar en los docs de episodios

        let characters = await Character.find({});
        let episodes = await Episode.find({});
        characters = characters.map((char) => {
            return {
                id: char._id,
                apiID: char.apiID,
                name: char.name,
            }
        })

        episodes = episodes.map((charac) => {
            let parserCharacters = charac.characters.map((url) => {
                const parts = url.split("/");
                return parseInt(parts[parts.length - 1]);
            })
            return {
                id: charac._id,
                characters: parserCharacters
            }
        });

        episodes.forEach((epis) => {
            epis.characters = epis.characters.map((characterID) => {
                const charact = characters.find((cha) => cha.apiID === characterID);
                if(charact) {
                    return {
                        id: charact.id,
                        apiID: charact.apiID,
                        name: charact.name,
                    }
                }
                return null;
            }).filter(Boolean)
        })
        for (const key in episodes) {
            let id = episodes[key].id;
            let update = episodes[key].characters;
            let doc = await Episode.findOneAndUpdate({ _id: id }, {characters: update});
            console.log(doc)
        }
*/