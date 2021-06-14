import React, { Fragment } from "react";
import classes from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";
const ingredientsArr = [
  { label: "Salad", type: "salad" },
  { label: "Cheese", type: "cheese" },
  { label: "Bacon", type: "bacon" },
  { label: "Meat", type: "meat" },
];
const BuildControls = (props) => {
  const renderIngredients = ingredientsArr.map(({ label, type }) => (
    <BuildControl
      key={label}
      label={label}
      type={type}
      add={() => props.add(type)}
      remove={() => {
        props.remove(type);
      }}
      disabled={props.disabled[type]}
      control={props.control}
    />
  ));
  const maxIngredientsMessage = props.control ? (
    <p>You can only select up to 6 ingrediants !</p>
  ) : (
    ""
  );

  return (
    <Fragment>
      <div className={classes.BuildControls}>
        <div>
          {maxIngredientsMessage}
          {renderIngredients}
        </div>
      </div>
      <button
        className={classes.OrderButton}
        onClick={props.orderSubmit}
        disabled={props.allowPurchase}
      >
        Order Now
      </button>
    </Fragment>
  );
};

export default BuildControls;
