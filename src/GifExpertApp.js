import React, {useState} from 'react'
import AddCategory from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {
    const [categories, setCategories] = useState(['Dragon ball'])
    
    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory setCategories={setCategories}/>

        <ol>
            {
                categories.map((cg) => (
                    <GifGrid 
                        category={cg} 
                        key={cg} 
                    />
                ))
            }
        </ol>
        </>
    )
}

export default GifExpertApp;