import React, { useEffect, useRef } from "react";

import classes from "./Finalized.module.css";
const Finalized = (props) => {
  let number = 0;

  const headerRef = useRef();
  const renderEndMessage = (intervalId) => {
    const text = "Thank You, your order was successfuly finalized !";

    if (number < text.length) {
      if (text[number] === " ") {
        headerRef.current.innerHTML += `&nbsp`;
      } else {
        headerRef.current.innerHTML += `<span> ${text[number]} </span>`;
      }

      number++;
    } else {
      clearInterval(intervalId);
      setTimeout(() => {
        props.history.replace("/");
      }, 3000);
    }
  };
  useEffect(() => {
    let intervalId;
    setTimeout(() => {
      intervalId = setInterval(() => {
        renderEndMessage(intervalId);
      }, 50);
    }, 700);
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className={classes.Finalized}>
      <h2 ref={headerRef}>{null}</h2>
    </div>
  );
};

export default Finalized;
