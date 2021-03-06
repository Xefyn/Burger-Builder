import React from "react";

import BuildControl from "./BuildControl/BuildControl";
import classes from "./BuildControls.module.css";
import BurgerBuilder from "../../../container/BurgerBuilder/BurgerBuilder";

const control = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

const buildControls = (props) => (
  <div className={classes.BuildControls}>
    <p>
      Current price: <strong>$ {props.price.toFixed(1)}</strong>
    </p>
    {control.map((ctrl) => (
      <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        added={() => props.ingredientAdded(ctrl.type)}
        minus={() => props.ingredientMinus(ctrl.type)}
        disabled={props.disabled[ctrl.type]}
      />
    ))}
    <button className={classes.OrderButton} disabled={!props.purchasable} onClick={props.purchasing}>
      ORDER NOW
    </button>
  </div>
);

export default buildControls;
