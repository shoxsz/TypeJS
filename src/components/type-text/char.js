import React from 'react'
import JustTyped from './just-typed'

const Char = ({ char, typed, isLast }) => {

  const classNames = ["type-text__typed"]

  if(!typed){
    classNames.push("none")
  }else if(char !== typed){
    classNames.push("wrong")
  }else{
    classNames.push("right")
  }

  return (
    <span className={ classNames.join(' ') }>
    { char }
    { <JustTyped correct={ char } typed={ typed } show={ isLast } /> }
  </span>
  )
}

export default Char