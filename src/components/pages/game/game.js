import React from 'react'
import MainTemplate from '../../templates/main-template/main-template'
import TypeText from '../../type-text/type-text'
import { RandomGenerator, ALL_SYMBOLS, LETTERS } from "../../texts/random/random";
import TypedBoard from '../../typed-board/typed-board';

import './game.css'

const GamePage = () => {
  const [data, setData] = React.useState(() => {
    // const data = RandomGenerator({ symbols: [ ALL_SYMBOLS ] })()
    const data = RandomGenerator( { symbols: [LETTERS], length: 2000 } )()
    
    return data
  })

  const [typed, setTyped] = React.useState({})

  const handleOnType = (typed, right) => {
    setTyped({ char: typed, right: right })
  }

  return (
    <MainTemplate>
      <div className="typed-board-container">
        <TypedBoard char={ typed.char } right={ typed.right } />
        <TypeText data={ data } onType={ handleOnType } />
      </div>
    </MainTemplate>
  )
}

export default GamePage