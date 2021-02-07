import React, { useState } from 'react';
import PropTypes from 'prop-types';

 const AddCategory = ({setCategories}) => {
    
    const [inputValue, setInputValue] = useState('');

    const handleInputValue = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();

        if(inputValue.trim().length > 2) {
            setCategories(cg => [inputValue, ...cg]);
            setInputValue('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={inputValue}
                onChange={handleInputValue}
                placeholder="Buscar gifs"
            ></input>
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory;