import Location from '../../../models/Location.js';
import axios from 'axios';

export const getAllLocations = async(req, res) => {
    try {
        const urlA = 'https://rickandmortyapi.com/api/episode?page=1'
        let apiUrls = [];
        let apiResult = await axios.get(urlA);
    
       
        // for (let i = 1; i <= apiResult.data.info.pages; i++) {
        //     apiUrls = [...apiUrls, `https://rickandmortyapi.com/api/episode?page=${i}`]
        // }

        // let charArr = apiUrls.map((url) => axios.get(url));
        // charArr = await Promise.all(charArr);
        // charArr = charArr?.map((response) => response.data.results).flat();
    
        // let epiArr = apiUrls.map((url) => axios.get(url));
        // epiArr = await Promise.all(epiArr);
        // epiArr = epiArr?.map((response) => response.data.results).flat();
        
        // epiArr = epiArr?.map((episode) => {
        //     return {
        //         apiID: episode.id,
        //         name: episode.name,
        //         airDate: episode.air_date,
        //         episode: episode.episode,
        //         characters: episode.characters
        //     }
        // });
    
        
    } catch (error) {
        return res.status(400).json(error.message);
    }
};
