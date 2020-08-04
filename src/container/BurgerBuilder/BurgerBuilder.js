import React, { useState } from 'react';

import Aux from '../../hoc/Auxilary'

import Burger from '../../components/Burger/Burger'

const BurgerBuilder = () => {
  const [ingredientState,setIngredientState] = useState({
    meat: 1,
    salad: 1,
    cheese: 2,
    bacon: 2,
  });
  return(
    <Aux>
      <Burger ingredients={ingredientState}/>
      <div>Build controls</div>
    </Aux>
  )
}

export default BurgerBuilder;