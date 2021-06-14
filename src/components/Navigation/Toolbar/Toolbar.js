import React from "react";
import classes from "./Toolbar.module.css";
import Logo from "../../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";

const Toolbar = ({ scroll }) => {
  return (
    <header className={classes.Toolbar}>
      <Logo scroll={scroll} />
      <nav>
        <NavigationItems scroll={scroll} />
      </nav>
    </header>
  );
};

export default Toolbar;
