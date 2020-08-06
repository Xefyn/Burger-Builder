import React from "react";

import Aux from "../../hoc/Auxilary";
import Toolbar from "../Navigation/Toolbar/Toolbar"

import classes from "./Layout.module.css"

const Layout = (props) => (
  <Aux>
    <Toolbar />
    <main className={classes.container}>
      {props.children}
    </main>
  </Aux>
);

export default Layout;