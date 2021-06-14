import React, { Component, Fragment } from "react";
import Burger from "../components/Burger/Burger";
import BuildControls from "../components/Burger/BuildConstrols/BuildControls";
import Modal from "../Modal/Modal";
import OrderSummary from "../OrderSummary/OrderSummary";

import Loader from "../Loader/Loader";
const INGREDIENTS_PRICES = {
  salad: 0.8,
  cheese: 0.9,
  bacon: 1.1,
  meat: 1.5,
};
class BurgerBuilder extends Component {
  state = {
    ingrediants: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 4,
    purchasable: false,
    serverAccepted: false,
  };
  handleIsPurchasable = (stateIngrediants) => {
    const sum = Object.keys(stateIngrediants)
      .map((itm) => stateIngrediants[itm])
      .reduce((prevVal, currentVal) => prevVal + currentVal);
    let purchasable = false;
    if (sum >= 2) {
      purchasable = true;
    } else {
      purchasable = false;
    }
    this.setState({ purchasable });
  };

  handleRemoveIngrediant = (type) => {
    const { ingrediants, totalPrice } = this.state;
    if (ingrediants[type] === 0) {
      return alert("Can't remove igredients that was not added before !");
    }
    const currentIngrediantVal = ingrediants[type];

    let uptadedIngrediant = currentIngrediantVal + -1;
    const uptatedIngState = { ...ingrediants, [type]: uptadedIngrediant };
    const additionalPrice = INGREDIENTS_PRICES[type];
    const currentPrice = totalPrice;
    const newPrice = currentPrice - additionalPrice;
    this.setState({ ingrediants: uptatedIngState, totalPrice: newPrice });
    this.handleIsPurchasable(uptatedIngState);
  };
  handleAddIngrediant = (type) => {
    const { ingrediants, totalPrice } = this.state;
    const currentIngrediantVal = ingrediants[type];

    let uptadedIngrediant = currentIngrediantVal + 1;
    const uptatedIngState = { ...ingrediants, [type]: uptadedIngrediant };
    const additionalPrice = INGREDIENTS_PRICES[type];
    const currentPrice = totalPrice;
    const newPrice = currentPrice + additionalPrice;
    this.setState({ ingrediants: uptatedIngState, totalPrice: newPrice });
    this.handleIsPurchasable(uptatedIngState);
  };
  handleOrderSubmit = () => {
    this.setState({ orderClicked: true });
  };
  handleExitPurchaseModal = () => {
    this.setState({ orderClicked: false });
  };
  handleContinuePurchase = () => {
    const queryParams = [];
    for (let i in this.state.ingrediants) {
      queryParams.push(
        encodeURIComponent(i) +
          "=" +
          encodeURIComponent(this.state.ingrediants[i])
      );
    }
    queryParams.push("price=" + this.state.totalPrice);
    const queryString = queryParams.join("&");
    this.props.history.push({
      pathname: "/checkout",
      search: "?" + queryString,
    });
  };
  render() {
    const { ingrediants, purchasable, totalPrice, orderClicked } = this.state;

    const isDisabled = { ...ingrediants };
    for (let ing in isDisabled) {
      isDisabled[ing] = isDisabled[ing] <= 0;
    }
    const constrolIngrediantsNum = { ...ingrediants };
    let total = 0;
    let isLocked = false;
    for (let item of Object.keys(constrolIngrediantsNum)) {
      total += constrolIngrediantsNum[item];
    }
    if (total >= 6) {
      isLocked = true;
    }
    let orderSummary = (
      <OrderSummary
        ingrediants={ingrediants}
        finalPrice={totalPrice}
        handleCancelPurchase={this.handleExitPurchaseModal}
        handleContinuePurchase={this.handleContinuePurchase}
      />
    );
    if (this.state.serverAccepted) {
      orderSummary = <Loader />;
    }
    return (
      <Fragment>
        <Modal
          showModal={orderClicked}
          exitPurchase={this.handleExitPurchaseModal}
        >
          {orderSummary}
        </Modal>
        <Burger ingrediants={this.state.ingrediants} />
        <h4 style={{ textAlign: "center", margin: 0, padding: "6px" }}>
          Current Price: ${this.state.totalPrice.toFixed(2)}
        </h4>
        <BuildControls
          add={this.handleAddIngrediant}
          remove={this.handleRemoveIngrediant}
          disabled={isDisabled}
          control={isLocked}
          allowPurchase={!purchasable}
          orderSubmit={this.handleOrderSubmit}
        />
      </Fragment>
    );
  }
}

export default BurgerBuilder;
