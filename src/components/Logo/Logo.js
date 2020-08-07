import React from 'react'

import BurgerLogo from '../../assets/Images/burger-logo.png'
import classes from '../../components/Logo/Logo.module.css'

const logo = () => (
  <div className={classes.Logo}>
    <img src={BurgerLogo} alt="My Burger"/>
  </div>
)

export default logo