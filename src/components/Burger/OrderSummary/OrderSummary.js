import React from "react";

import Aux from "../../../hoc/Auxilary";

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
      <p>Continue to Checkout?</p>
    </Aux>
  );
};

export default orderSummary;
