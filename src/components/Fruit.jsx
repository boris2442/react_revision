import React from 'react';

const Fruit = ({ fruitInfo, onFruitDelete }) => {
 
    return (


        <li>
            {fruitInfo.nom}
            <button onClick={() => onFruitDelete(fruitInfo.id)}>X</button>
        </li>

    );
};

export default Fruit;