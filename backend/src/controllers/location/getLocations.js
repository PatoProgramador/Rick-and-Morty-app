import Location from '../../../models/Location.js';
// import Character from "../../../models/Character.js";

export const getAllLocations = async(req, res) => {
    let options = {
        page: 1,
        limit: 10
    };
    try {

        const upLocals = await Location.paginate({}, options)
        return res.status(200).json(upLocals);
    } catch (error) {
        return res.status(400).json(error.message);
    }
};

export const getLocationById = async (req, res) => {
    const { id } = req.params;
    try {
        const local = await Location.findById(id).exec();
        return res.status(200).json(local);
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

-- Codigo actualizar las location con la simulacion de la relacion en mongo con los charac--

-- En este codigo se buscan todas las location y se hacen split de las url en residents
-- debido a que el numero al final de cada url es el id de cada character en la api, asi, se
-- busca cada character de la db por su apiID y se reemplazan datos para finalizar con un array
-- listo para actualizar todas los location de la db
 

            let locations = await Location.find({});
        let characters = await Character.find({});

        characters = characters.map((char) => {
            return {
                id: char._id,
                apiID: char.apiID,
                name: char.name,
            }
        })

        locations = locations.map((charac) => {
            let parserCharacters = charac.residents.map((url) => {
                const parts = url.split("/");
                return parseInt(parts[parts.length - 1]);
            })
            return {
                id: charac._id,
                residents: parserCharacters
            }
        });

        locations.forEach((local) => {
            local.residents = local.residents.map((characterID) => {
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

        for (const key in locations) {
            let id = locations[key].id;
            let update = locations[key].residents;
            let doc = await Location.findOneAndUpdate({ _id: id }, {residents: update});
            console.log(doc)
        }
*/
