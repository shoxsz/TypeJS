import React from 'react'

import './game.css'
import MainTemplate from '../../templates/main-template/main-template'
import { RandomGenerator, LETTERS, LETTERS_CAP, MATH_SYMBOLS } from '../../texts/random/random';
import TypedBoard from '../../components/typed-board/typed-board'
import Timer from '../../components/timer/timer'
import TypeText from '../../components/type-text/type-text'
import RandomConfigure from '../../components/random-configure/random-configure';

const GamePage = () => {
  const [params, setParams] = React.useState({
    symbols: 
    [
      {
        weight: 1,
        symbols: LETTERS
      }
    ], 
    length: 100 
  })

  const [data, setData] = React.useState('')
  const [typed, setTyped] = React.useState({})
  const [stop, setStop] = React.useState(true)

  React.useEffect(() => {
    setData(RandomGenerator(params)())
  }, [params])

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
        <div>
          <RandomConfigure initial={ params } onChange={ params => setParams(params) } />
        </div>
        <h2>{ !stop && "Typing..." || "Resting" }</h2>
        <TypedBoard char={ typed.char } right={ typed.right } />
        <TypeText data={ data } onType={ handleOnType } onEnter={ handleOnEnter } />
        <Timer stop={ stop }/>
      </div>
    </MainTemplate>
  )
}

export default GamePage