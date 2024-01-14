

import React from 'react'
import './style.scss'

function HeaderButton(props) {
  return (
    <button className="header__button">{props.contenttext}</button>
  )
}

export default HeaderButton