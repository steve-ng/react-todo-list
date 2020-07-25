import React, { useState } from 'react';

import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';

const Ingredients = props => {
  const [userIngredients, setUserIngredients] = useState([]);

  const addIngredientHandler = ingredient => {
    setUserIngredients(prevIngredients => [
      ...prevIngredients,
      { id: Math.random().toString(), ...ingredient }
    ]);
  };

  const removeIngredientHandler = id => {
    const filteredIngredients = userIngredients.filter(ig => ig.id != id);
    setUserIngredients(filteredIngredients);
  };

  return (
    <div className="App">
      <IngredientForm onAddIngredient={addIngredientHandler} />

      <section>
        <IngredientList 
          ingredients={userIngredients} 
          onRemoveItem={ingredient => removeIngredientHandler(ingredient)} />
      </section>
    </div>
  );
}

export default Ingredients;
