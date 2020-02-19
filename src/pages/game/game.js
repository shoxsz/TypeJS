import React from 'react'

import './game.css'
import MainTemplate from '../../templates/main-template/main-template'
import { RandomGenerator, LETTERS, LETTERS_CAP, MATH_SYMBOLS } from '../../texts/random/random';
import TypedBoard from '../../components/typed-board/typed-board'
import Timer from '../../components/timer/timer'
import TypeText from '../../components/type-text/type-text'

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
  const [stop, setStop] = React.useState(true)

  const handleOnType = (typed, right) => {
    if(stop){
      setStop(false)
    }
    
    setTyped({ char: typed, right: right })
  }

  const handleOnEnter = () => {
    if(!stop){
      setStop(true)
    }
  }

  return (
    <MainTemplate>
      <div className="typed-board-container">
        <h2>{ !stop && "Typing..." || "Resting" }</h2>
        <TypedBoard char={ typed.char } right={ typed.right } />
        <TypeText data={ data } onType={ handleOnType } onEnter={ handleOnEnter } />
        <Timer stop={ stop }/>
      </div>
    </MainTemplate>
  )
}

export default GamePage