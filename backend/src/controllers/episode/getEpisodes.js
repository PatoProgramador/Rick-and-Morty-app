import Episode from "../../../models/Episode.js";
import axios from 'axios';

export const getAllEpisodes = async (req, res) => {
    try {
        const urlA = 'https://rickandmortyapi.com/api/episode?page=1'
        let apiUrls = [];
        let apiResult = await axios.get(urlA);
    
    
        for (let i = 1; i <= apiResult.data.info.pages; i++) {
            apiUrls = [...apiUrls, `https://rickandmortyapi.com/api/episode?page=${i}`]
        }
    
    
        // let charArr = apiUrls.map((url) => axios.get(url));
        // charArr = await Promise.all(charArr);
        // charArr = charArr?.map((response) => response.data.results).flat();
    
        // charArr = charArr?.map((charac) => {
        //     return {
        //         apiID: charac.id,
        //         name: charac.name,
        //         img: charac.image,
        //         status: charac.status,
        //         species: charac.species,
        //         gender: charac.gender,
        //         origin: {
        //             name: charac.origin.name,
        //             apiUrl: charac.origin.url
        //         },
        //         location: {
        //             name: charac.location.name,
        //             apiUrl: charac.location.url
        //         },
        //         episodes: charac.episode
        //     }
        // });
    
    
        // Character.insertMany(charArr);
        return res.status(200).json(apiUrls)
    } catch (error) {
        return res.status(400).json(error.message)
    }
};