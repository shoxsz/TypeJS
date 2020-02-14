import React from 'react'

import './type-text.css'

const JustTyped = ({ correct, typed, show }) => {
  const classNames = ["type-text__typed-last", correct === typed ? "right" : "wrong"]
  return (
    <>
    {show &&
    <span className={ classNames.join(' ') }>{ typed }</span>
    }
    </>
  )
}

export default JustTyped