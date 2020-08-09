import React from 'react'
import {FaBars} from 'react-icons/fa'

import classes from './Toolbar.module.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'

const toolbar = (props) => (
  <header className={classes.Toolbar}>
    <FaBars onClick={props.setShowSidebarState(true)} size={32} style={{fill: 'white'}}/>
    <div className={classes.DekstopOnly}>
      <Logo />
      <nav>
        <NavigationItems />
      </nav>
    </div>
  </header>
)

export default toolbar