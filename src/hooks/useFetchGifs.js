import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

/* Los hooks no son más que funciones las cuales regresan algo */
export const useFetchGifs = ( category ) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

        const getImages = async() => {
            const newImages = await getGifs( category );
            setImages( newImages );
            setIsLoading( false );
        }
    
        useEffect(() => {
            /* getGifs( category )
                .then( newImages => setImages[newImages]) */
            getImages();
        }, []);

        return {
            // images: images, // Desde el ECMA06 cuando un objeto apunta a una propiedad del mismo nombre basta con solo hacer referencia a dicho objeto
            //isLoading: isLoading
            images,
            isLoading,
        }
}

