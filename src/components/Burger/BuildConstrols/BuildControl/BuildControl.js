import React from "react";
import classes from "./BuildControl.module.css";
const BuildControl = (props) => {
  return (
    <div className={classes.BuildControl}>
      <div className={classes.Label}>{props.label}</div>
      <button
        className={classes.Less}
        onClick={props.remove}
        disabled={props.disabled}
      >
        Less
      </button>
      <button
        onClick={props.add}
        className={classes.More}
        disabled={props.control}
      >
        More
      </button>
    </div>
  );
};

export default BuildControl;
