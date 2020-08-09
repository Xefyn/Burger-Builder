import React from 'react'

import classes from './SideDrawer.module.css'

import Aux from '../../../hoc/Auxilary'
import Backdrop from '../../UI/Backdrop/Backdrop'
import NavigationItems from '../NavigationItems/NavigationItems'
import Logo from '../../Logo/Logo'

const sideDrawer = (props) => {

  return(
    <Aux>
      <Backdrop show={props.show} clicked={props.clicked}/>
      <div className={[classes.SideDrawer, props.show ? classes.Open : classes.Close].join(" ")}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  )
}

export default sideDrawer