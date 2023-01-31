import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']); 

    const onAddCategory = (value) => {
        if(categories.includes(value)) return; 

        setCategories([value, ...categories]);
    }

  return (
    <>
        <h1>GifExpertApp</h1>
        
        <AddCategory onNewCategory={ (value) => onAddCategory(value) }/>

            {
                categories.map( ( category ) => (
                    <GifGrid 
                        key={ category } 
                        category={ category } />
                ) )
            }
    </>
  )
}
