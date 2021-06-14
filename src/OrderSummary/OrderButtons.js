import React, { Fragment } from "react";
import classes from "./OrderButton.module.css";
const OrderButtons = ({ handleContinuePurchase, handleCancelPurchase }) => (
  <Fragment>
    <button onClick={handleContinuePurchase} className={classes.ContinueBtn}>
      CONTINUE
    </button>
    <button onClick={handleCancelPurchase} className={classes.CancelBtn}>
      CANCEL
    </button>
  </Fragment>
);
export default OrderButtons;
