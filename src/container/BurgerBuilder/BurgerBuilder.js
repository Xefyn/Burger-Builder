import React, { useState } from 'react';

import Aux from '../../hoc/Auxilary'

import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.5,
  bacon: 0.8,
}

const BurgerBuilder = () => {
  const [ingredientState,setIngredientState] = useState({
    meat: 0,
    salad: 0,
    cheese: 0,
    bacon: 0,
  });
  const [priceState,setPriceState] = useState(4);
  const disabledInfo = {...ingredientState}
  for(let key in disabledInfo){
    disabledInfo[key] = disabledInfo[key] <= 0
  }

  const addIngredientHandler = (type) => {
    setIngredientState(prevState => ({...prevState,[type]:ingredientState[type] + 1}))
    setPriceState(prevState => prevState + INGREDIENT_PRICES[type])
  }

  const minusIngredientHandler = (type) => {
    if(ingredientState[type] > 0) {
      setIngredientState(prevState => ({...prevState,[type]:ingredientState[type] - 1}))
      setPriceState(prevState => prevState - INGREDIENT_PRICES[type])
    }
  }
  return(
    <Aux>
      <Burger ingredients={ingredientState}/>
      <BuildControls 
        ingredientAdded={addIngredientHandler}
        ingredientMinus={minusIngredientHandler}
        disabled={disabledInfo}
      />
    </Aux>
  )
}

export default BurgerBuilder;