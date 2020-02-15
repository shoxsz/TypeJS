import React from 'react'
import MainTemplate from '../../templates/main-template/main-template'
import TypeText from '../../type-text/type-text'
import { RandomGenerator, LETTERS, LETTERS_CAP, MATH_SYMBOLS } from "../../texts/random/random";
import TypedBoard from '../../typed-board/typed-board';

import './game.css'

const GamePage = () => {
  const [data, setData] = React.useState(() => {
    const data = RandomGenerator
    (
      {
        symbols: 
        [
          {
            weight: 1,
            symbols: LETTERS
          },
          { 
            weight: 4, 
            symbols: LETTERS_CAP 
          },
          {
            weight: 3,
            symbols: MATH_SYMBOLS
          }
        ], 
        length: 100 
      } 
    )()
    
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