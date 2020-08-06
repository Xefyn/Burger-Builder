import React from "react";

import Aux from "../../../hoc/Auxilary";
import Button from '../../UI/Button/Button'

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredient).map((igKey) => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey} :</span>{" "}{props.ingredient[igKey]}
      </li>
    );
  });
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>Your Burger with the following ingredient:</p>
      <ul>{ingredientSummary}</ul>
      <p><strong>Your price: ${props.price}</strong></p>
      <p>Continue to Checkout?</p>
      <Button btnType={"Success"} clicked={props.continueHandler}>Continue</Button>
      <Button btnType={"Danger"} clicked={props.cancelHandler}>Cancel</Button>
    </Aux>
  );
};

export default orderSummary;
