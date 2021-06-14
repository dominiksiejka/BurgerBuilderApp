import React, { Fragment } from "react";
import classes from "./Modal.module.css";
import BackDrop from "../Modal/BackDrop";

const Modal = (props) => {
  return (
    <Fragment>
      <BackDrop show={props.showModal} cancelPurchase={props.exitPurchase} />
      <div
        className={classes.Modal}
        style={{
          transform: props.showModal ? "translate(-50%, 20%)" : null,
        }}
      >
        {props.children}
      </div>
    </Fragment>
  );
};

export default Modal;
