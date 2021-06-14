import React, { useEffect, useState } from "react";
import Aux from "../../hoc/Auxiliary";

import Toolbar from "../Navigation/Toolbar/Toolbar";

const Layout = (props) => {
  const [scrollPos, setScrollPos] = useState(0);
  const handleScrollFunc = (event) => {
    setScrollPos(event.currentTarget.scrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScrollFunc);
  }, [scrollPos]);

  return (
    <Aux>
      <Toolbar scroll={scrollPos} />
      <main>{props.children}</main>
    </Aux>
  );
};

export default Layout;
