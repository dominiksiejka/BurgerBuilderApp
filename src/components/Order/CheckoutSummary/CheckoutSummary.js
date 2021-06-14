import React from "react";
import classes from "./CheckoutSummary.module.css";
import OrderButtons from "../../../OrderSummary/OrderButtons";
import Burger from "../../Burger/Burger";
const CheckoutSummary = (props) => {
  return (
    <div className={classes.CheckoutSummary}>
      <h3>We Hope it will taste great, enjoy !</h3>
      <Burger ingrediants={props.ingrediants} />
      <OrderButtons
        handleContinuePurchase={props.handlePurchaseContinued}
        handleCancelPurchase={props.handlePurchaseCanceled}
      />
    </div>
  );
};

export default CheckoutSummary;
