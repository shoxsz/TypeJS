import React from 'react'

import './type-text.css'
import Char from './char'

const TypeText = ({ data, onType, onFinish, onEnter }) => {
  const [render, setRender] = React.useState()
  const [renderRefs, setRenderRefs] = React.useState([])
  const [stats, setStats] = React.useState({ right: 0, wrong: 0 })
  const [finished, setFinished] = React.useState(false)
  const inputRef = React.createRef()

  React.useEffect(() => {
    buildTextToRender()
  }, [data])

  const buildTextToRender = () => {
    const refs = []
    const text = data.substr(inputRef.current.value.length).split('').map((char, index) => {
      const ref = React.createRef()
      refs.push(ref)
      return <Char ref={ ref } key={ index } char={ char }/>
    })

    setRender(text)
    setRenderRefs(refs)
  }

  const handleChange = () => {
    const value = inputRef.current.value
    const char = renderRefs[value.length - 1]
    const isRight = char.current.type(value[value.length - 1])
    setStats({
      wrong: stats.wrong + (isRight ? 0 : 1),
      right: stats.right + (isRight ? 1: 0)
    })

    if(!!onType){
      onType(value[value.length - 1], isRight)
    }
  }

  const handleKeyDown = (event) => {
    if(event.target.value.length === data.length){
      event.preventDefault()

      if(!finished && !!onFinish){
        setFinished(true)
        onFinish(stats)
      }
    }

    if(["Backspace", " "].includes(event.key)){
      event.preventDefault()
    }

    if(event.key == "Enter"){
      event.preventDefault()
      if(!!onEnter){
        onEnter()
      }
    }
  }


  return (
    <div className="type-text">
      <div className="type-text__totype">
        { render }
      </div>
      <div className="type-text__description">Type what you see in the textarea above(Press enter to STOP):</div>
      <input ref={ inputRef } onPaste={ e => e.preventDefault() } onKeyDown={ handleKeyDown } onChange={ e => handleChange(e) } type="text"/>
    </div>
  )
}

export default TypeText