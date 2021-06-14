import React from "react";
import classes from "./OrderSummary.module.css";
import OrderButtons from "./OrderButtons";
const OrderSumary = ({
  ingrediants,
  finalPrice,
  handleContinuePurchase,
  handleCancelPurchase,
}) => {
  const renderBurgerInfo = Object.keys(ingrediants).map((el) => (
    <li key={el}>
      {el.charAt(0).toUpperCase() + el.slice(1)}: {ingrediants[el]}
    </li>
  ));
  return (
    <div className={classes.OrderSummary}>
      <h3>Your order:</h3>
      <p>A delicious burger with the following ingrediants:</p>
      <ul>{renderBurgerInfo}</ul>
      <p>
        Total price: <strong>${finalPrice.toFixed(2)} </strong>
      </p>
      <p>Continue to checkout ?</p>
      <OrderButtons
        handleContinuePurchase={handleContinuePurchase}
        handleCancelPurchase={handleCancelPurchase}
      />
    </div>
  );
};

export default OrderSumary;
