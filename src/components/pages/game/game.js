import React from 'react'
import MainTemplate from '../../templates/main-template/main-template'
import TypeText from '../../type-text/type-text'
import { RandomGenerator, ALL_SYMBOLS, LETTERS } from "../../texts/random/random";

const GamePage = () => {
  const [data, setData] = React.useState(() => {
    // const data = RandomGenerator({ symbols: [ ALL_SYMBOLS ] })()
    const data = RandomGenerator( { symbols: [LETTERS], length: 2000 } )()
    
    return data
  })

  return (
    <MainTemplate>
      <TypeText data={ data } />
    </MainTemplate>
  )
}

export default GamePage