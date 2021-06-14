import React from "react";
import classes from "./Burger.module.css";
import BurgerIngredients from "./BurgerIngrediants/BurgerIngredients";

const Burger = (props) => {
  let transforms = Object.keys(props.ingrediants)
    .map((ing) => {
      return [...Array(props.ingrediants[ing])].map((itm, index) => {
        return <BurgerIngredients key={ing + index} type={ing} />;
      });
    })
    .reduce((prevVal, currentVal) => {
      return prevVal.concat(currentVal);
    }, []);
  if (transforms.length === 0) {
    transforms = <p>Please start adding ingrediants !</p>;
  }
  return (
    <div className={classes.Burger}>
      <BurgerIngredients type='bread-top' />
      {transforms}
      <BurgerIngredients type='bread-bottom' />
    </div>
  );
};

export default Burger;
