import React from 'react'

import classes from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem'

const navigationItems = (props) => (
  <ul className={classes.NavigationItems}>
    <NavigationItem text="Burger Builder" link="/" active/>
    <NavigationItem text="Checkout" link="/"/>
  </ul>
)

export default navigationItems