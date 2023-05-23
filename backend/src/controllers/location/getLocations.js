import Location from '../../../models/Location.js';


export const getAllLocations = async(req, res) => {
    try {
        const locations = await Location.find({});
    
        return res.status(200).json(locations);
    } catch (error) {
        return res.status(400).json(error.message);
    }
};

/* 
-- Codigo para poblar la database con las location de la API--

    -- axios para hacer fetch --
    import axios from 'axios';

    -- fetch de una url para mirar cuantas pages hay y asi traerlos todos --
    const urlA = 'https://rickandmortyapi.com/api/location?page=1'
    let apiUrls = [];
    let apiResult = await axios.get(urlA);

    -- todas las url, usando en paginado de la api para hacer un solo fetch --
    for (let i = 1; i <= apiResult.data.info.pages; i++) {
        apiUrls = [...apiUrls, `https://rickandmortyapi.com/api/episode?location=${i}`]
    }

    -- fetch de todos las location en la API --
    let locationArr = apiUrls.map((url) => axios.get(url));
    locationArr = await Promise.all(locationArr);
    locationArr = locationArr?.map((response) => response.data.results).flat();

    -- modificando el array de acuerdo al modelo --
    locationArr = locationArr?.map((location) => {
        return {
            apiID: location.id,
            name: location.name,
            type: location.type,
            dimension: location.dimension,
            residents: location.residents
        }
    });

    -- insertando todos los documentos en el modelo --
    await Location.insertMany(locationArr);
*/
