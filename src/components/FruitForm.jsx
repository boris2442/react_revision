import React from 'react';
import { useState } from 'react';
const FruitForm = ({fruits, setFruits,handleDelete}) => {
    //state
    //compretements
    const [newFruit, setNewFruit] = useState('fraise');
    const handleChange = (e) => {
        const valueAfterChange = e.target.value;
        setNewFruit(valueAfterChange);
        // console.log(e.target.value)
    }
   
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(e)
        const copyFruits = [...fruits];
        const id = new Date().getTime();
        const nom = newFruit
        const fruitAdd = { id: id, nom: nom }
        copyFruits.push(fruitAdd)
        setFruits(copyFruits);
        setNewFruit("")

    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" name="" id="" value={newFruit} placeholder='Ajouter un fruit' onChange={handleChange} />
                <input type="submit" value="Ajouter +" />
            </form>
        </div>
    );
};

export default FruitForm;