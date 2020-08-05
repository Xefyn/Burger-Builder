import React, { useState, useEffect } from "react";

import Aux from "../../hoc/Auxilary";

import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.5,
  bacon: 0.8,
};

const BurgerBuilder = () => {
  const [ingredientState, setIngredientState] = useState({
    meat: 0,
    salad: 0,
    cheese: 0,
    bacon: 0,
  });
  const [priceState, setPriceState] = useState(4);
  const [purchasableState, setPurchasableState] = useState(false);
  const [showModalState, setShowModalState] = useState(false);

  const disabledInfo = { ...ingredientState };
  for (let key in disabledInfo) {
    disabledInfo[key] = disabledInfo[key] <= 0;
  }

  const updatePurchaseState = () => {
    const sum = Object.keys(ingredientState)
      .map((igKey) => {
        return ingredientState[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);

    setPurchasableState(sum > 0);
  };

  useEffect(() => {
    updatePurchaseState();
  }, [ingredientState]);

  const addIngredientHandler = (type) => {
    setIngredientState((prevState) => ({
      ...prevState,
      [type]: ingredientState[type] + 1,
    }));
    setPriceState((prevState) => prevState + INGREDIENT_PRICES[type]);
    updatePurchaseState();
  };

  const minusIngredientHandler = (type) => {
    if (ingredientState[type] > 0) {
      setIngredientState((prevState) => ({
        ...prevState,
        [type]: ingredientState[type] - 1,
      }));
      setPriceState((prevState) => prevState - INGREDIENT_PRICES[type]);
      updatePurchaseState();
    }
  };
  return (
    <Aux>
      <Modal show={showModalState}>
        <OrderSummary
          ingredient={ingredientState}
        />
      </Modal>
      <Burger ingredients={ingredientState} />
      <BuildControls
        ingredientAdded={addIngredientHandler}
        ingredientMinus={minusIngredientHandler}
        disabled={disabledInfo}
        price={priceState}
        purchasable={purchasableState}
        purchasing={() => setShowModalState(!showModalState)}
      />
    </Aux>
  );
};

export default BurgerBuilder;
