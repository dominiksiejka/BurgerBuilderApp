import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./NavigationItem.module.css";
const NavigationItem = (props) => (
  <li className={classes.NavigationItem}>
    <NavLink
      onClick={props.handleClickItem}
      to={props.url}
      exact
      activeClassName={classes.active}
    >
      {props.children}
    </NavLink>
  </li>
);

export default NavigationItem;
