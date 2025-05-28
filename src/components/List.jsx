import React from 'react';
import { useState } from 'react';
import Fruit from './Fruit';
import FruitForm from './FruitForm';
const List = () => {
    const [fruits, setFruits] = useState([
        {
            id: 1,
            nom: "Tomate"
        },
        {
            id: 2,
            nom: 'Patate'
        },
        {
            id: 3,
            nom: 'Orange'
        }
    ])
    

    const handleDelete = (id) => {
        // console.log(id)
        const fruitsCopy = [...fruits];
        const fruitsUpdate = fruitsCopy.filter(fruit => fruit.id !== id);
        setFruits(fruitsUpdate)
    }

  
    const listes = <li>Listes des fruits en listes</li>
    return (
        <div>
            <h2>Listes des fruits</h2>
            <ul>
                {
                    fruits.map((fruit) => (
                       <Fruit fruitInfo={fruit} onFruitDelete={handleDelete}/>

                    ))
                }
            </ul>
            
            <FruitForm fruits={fruits} setFruits={setFruits} />
        </div>
    );
};

export default List;
//gestion de formulaire
//creation du formulaire
//soummission du formulaire
//collection des donnees
//synchronisation desecdente