import React from "react";
import NavigationItem from "../NavigationItem/NavigationItem";
import classes from "./NavigationItems.module.css";
const NavigationItems = (props) => {
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem url='/' handleClickItem={null}>
        Burger
      </NavigationItem>
      <NavigationItem
        url='/checkout'
        handleClickItem={() =>
          alert("In order to continue you need to press 'Order Now' button ")
        }
      >
        Checkout
      </NavigationItem>
    </ul>
  );
};

export default NavigationItems;
