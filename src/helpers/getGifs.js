/**
 * Esta función retorna un objeto con los gifs de la categoría que se le mande
 * @param {<String>} category 
 * @returns {<Array>} gifs
 */ 
export const getGifs = async( category ) => {

    const API_KEY = 'hdXSN0yvRWYK8dbbxmU5FE4y18OuSMbV'
    const URL = `https://api.giphy.com/v1/gifs/search?api_key=${ API_KEY }&q=${ category }&limit=10`;
    
    const RESP = await fetch( URL );
    const { data } = await RESP.json();

    const GIFS = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    return GIFS;
}