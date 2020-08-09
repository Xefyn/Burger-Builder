import React, { useState } from "react";

import Aux from "../../hoc/Auxilary";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer"
import Toolbar from "../Navigation/Toolbar/Toolbar"

import classes from "./Layout.module.css"

const Layout = (props) => {
  const [showSidebarState,setShowSidebarState] = useState(false)
  const showSidebarHandler = () => {
    setShowSidebarState(!showSidebarState)
  }
  return(
    <Aux>
      <Toolbar setShowSidebarState={() => setShowSidebarState}/>
      <SideDrawer show={showSidebarState} clicked={showSidebarHandler}/>
      <main className={classes.container}>
        {props.children}
      </main>
    </Aux>
  )
};

export default Layout;