import React from 'react'

import './random-configure.css'
import { LETTERS, MATH_SYMBOLS, LETTERS_CAP } from '../../texts/random/random'

const initialParams = {
  symbols: 
  [
    {
      weight: 1,
      symbols: LETTERS
    }
  ], 
  length: 100 
} 

const charactersArray = [
  { symbols: LETTERS, name: "Lower case letters" },
  { symbols: LETTERS_CAP, name: "Upper case letters" },
  { symbols: MATH_SYMBOLS, name: "Math symbols" }
]

const RandomConfigure = ({ initial = initialParams, onChange }) => {
  const [params, setParams] = React.useState(initial)

  React.useEffect(() => {
    console.log("change")
    onChange(params)
  }, [params])

  const onSelectSymbols = (ev, symbols) => {
    let index = -1

    const mparams = { ...params }

    mparams.symbols.forEach((s_symbols, s_index) => {
      if(s_symbols.symbols == symbols){
        index = s_index
      }
    })

    if(index == -1 && ev.target.checked){
      mparams.symbols.push({ weight: 1, symbols: symbols })
    }else if(index > -1 && !ev.target.checked){
      mparams.symbols.splice(index, 1)
    }

    setParams({ ...mparams })
  }

  return (
    <div className="random-configure">
      <div>Text length:</div>
      <input defaultValue={ params.length } type="number" onChange={ e => setParams({ ...params, length: Number(e.target.value) }) }/>
      <div>Characters to generate:</div>
      {
        charactersArray.map(item => {
          return (
            <div>
              <span>{ item.name }</span>
              <input type="checkbox" onChange={ e => onSelectSymbols(e, item.symbols) }/>
            </div>
          )
        })
      }
    </div>
  )
}

export default RandomConfigure