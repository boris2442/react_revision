import React, { useState } from 'react';

const List2 = () => {
    const [fruits, setFruits] = useState([
        { id: 1, nom: "Tomate" },
        { id: 2, nom: "Patate" },
        { id: 3, nom: "Orange" }
    ]);

    const [newFruit, setNewFruit] = useState("fraise");

    // Gérer la suppression
    const handleDelete = (id) => {
        const updatedFruits = fruits.filter(fruit => fruit.id !== id);
        setFruits(updatedFruits);
    };

    // Gérer la saisie dans le champ
    const handleChange = (e) => {
        setNewFruit(e.target.value);
    };

    // Gérer l'envoi du formulaire
    const handleSubmit = (e) => {
        e.preventDefault();
        if (newFruit.trim() === "") return;

        const newFruitObject = {
            id: new Date().getTime(),
            nom: newFruit.trim()
        };

        setFruits([...fruits, newFruitObject]);
        setNewFruit("");
    };
    return (
        <div>
            <h2>Liste des fruits</h2>
            <ul>
                {fruits.map((fruit) => (
                    <li key={fruit.id}>
                        {fruit.nom}
                        <button onClick={() => handleDelete(fruit.id)} style={{ marginLeft: "10px" }}>
                            Supprimer
                        </button>
                    </li>
                ))}
            </ul>

            <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
                <input
                    type="text"
                    value={newFruit}
                    placeholder="Ajouter un fruit"
                    onChange={handleChange}
                />
                <input type="submit" value="Ajouter +" />
            </form>
        </div>
    );
};

export default List2;