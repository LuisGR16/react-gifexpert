import { useState } from "react"
import { AddCategory, GifGrid } from "./components";


export const GifExpertApp = () => {
    
    const [categories, setCategories] = useState(['One punch'])

    const handleAddCategory = ( newCategory ) => {

        if( categories.includes(newCategory) ) return; // Verifica si el elemento ya existe, para no insertarlo

        // Utilizamos el operador spreed para crear un nuevo arreglo, no podemos mutar los arreglos, deben crearse nuevos en React
        setCategories( [ newCategory, ...categories ] );
    }
  return (
    <>
        <h1>GifExpertApp</h1>

        <AddCategory 
            onNewCategory={ handleAddCategory }
        />
        { categories.map( category => (
                    <GifGrid 
                        key={ category }// Key debe de ser un valor único
                        category={ category }
                    />
                )  
        ) }

    </>
  )
}
