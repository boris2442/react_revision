import React from 'react';

const Fruit = (props) => {
    const fruitInfo = props.fruitInfo;
    const onFruitDelete = props.onFruitDelete;
    //  const handleDelete = (id) => {
    //     // console.log(id)
    //     const fruitsCopy = [...fruits];
    //     const fruitsUpdate = fruitsCopy.filter(fruit => fruit.id !== id);
    //     setFruits(fruitsUpdate)
    // }
    return (
        <div>
            {/* <li key={fruit.id}>{fruit.nom}  <button onClick={() => handleDelete(fruit.id)}>X</button></li> */}
            {/* <li key={props.fruitInfo.id}>{props.fruitInfo.nom}  <button onClick={() => handleDelete(props.onFruitDelete.id)}>X</button></li> */}
            <li key={fruitInfo.id}>{props.fruitInfo.nom}  <button onClick={() => handleDelete(onFruitDelete.id)}>X</button></li>
        </div>
    );
};

export default Fruit;