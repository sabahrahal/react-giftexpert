import React, { useState } from 'react'

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('')

    const onSubmit = ( event ) => {
        event.preventDefault();
        const value = inputValue.trim();
        if(value.length <= 1) return; 
        onNewCategory( value ); 
        setInputValue('');
    }

  return (
    <form onSubmit={(event) => onSubmit(event)}>
        <input
            type='text'
            placeholder='Buscar Gif'
            value={ inputValue }
            onChange={ (event) => setInputValue(event.target.value) }
        />
    </form>
  )
}
