import React, { useState } from 'react';

import Aux from '../../hoc/Auxilary'

import Burger from '../../components/Burger/Burger'

const BurgerBuilder = () => {
  return(
    <Aux>
      <Burger/>
      <div>Build controls</div>
    </Aux>
  )
}

export default BurgerBuilder;