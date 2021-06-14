import React, { Component } from "react";
import { Route } from "react-router-dom";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import ContactData from "../ContactData/ContactData";
class Checkout extends Component {
  state = {
    ingrediants: {},
    totalPrice: 0,
  };
  componentWillUnmount() {
    <Checkout />;
    <ContactData />;
  }
  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search);
    const ingrediants = {};
    let price = 0;
    for (let param of query.entries()) {
      if (param[0] === "price") {
        price = param[1];
      } else {
        ingrediants[param[0]] = +param[1];
      }
    }

    this.setState({ ingrediants, totalPrice: price });
  }
  handlePurchaseContinued = () => {
    this.props.history.replace("/checkout/contact-data");
  };
  handlePurchaseCanceled = () => {
    this.props.history.goBack();
  };
  render() {
    const checkoutSumamryStyles = {
      textAlign: "center",
    };
    return (
      <div>
        <h1 style={checkoutSumamryStyles}>Checkout Page</h1>
        <CheckoutSummary
          ingrediants={this.state.ingrediants}
          handlePurchaseContinued={this.handlePurchaseContinued}
          handlePurchaseCanceled={this.handlePurchaseCanceled}
        />
        <Route
          path={this.props.match.path + "/contact-data"}
          render={() => (
            <ContactData
              ings={this.state.ingrediants}
              price={this.state.totalPrice}
            />
          )}
        />
      </div>
    );
  }
}

export default Checkout;
