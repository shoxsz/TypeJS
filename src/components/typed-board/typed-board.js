import React from 'react'

import './typed-board.css'

const calcClassName = (right) => {
  if(right === false) return 'wrong'
  if(right === true) return 'right'
  return 'none'
}

const TypedBoard = ({ char, right, size = '64px', fontSize = '32px' }) => {
  const classNames = ["typed-board", calcClassName(right)]

  const style = {
    width: size,
    height: size,
    fontSize: fontSize
  }

  if(!char){
    char = "#"
  }

  return (
    <div className={ classNames.join(' ') } style={ style }>
      { char }
    </div>
  )
}

export default TypedBoard