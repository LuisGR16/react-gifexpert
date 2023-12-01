import PropTypes from 'prop-types';
import { useState } from 'react';


export const AddCategory = ({ onNewCategory }) => {

    const [ inputValue, setInputValue ] = useState('');

    const onInputChange = ({ target }) => {
        setInputValue( target.value );
    }

    const onSubmit = ( event ) => {
        event.preventDefault();

        const newInputValue = inputValue.trim()

        if( newInputValue <= 1 ) return;

        // setCategories( categories => [ inputValue, ...categories ] );
        setInputValue('');
        onNewCategory( newInputValue )
    }


  return (
    <form onSubmit={ onSubmit }>
        <input 
            type="text" 
            placeholder="Buscar gifs"
            value={ inputValue }
            onChange={ onInputChange }
        />
    </form>
  )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired,
}