import React from 'react'

import './type-text.css'
import Char from './char'

const TypeText = ({ data }) => {
  const [typedData, setTypedData] = React.useState('')
  const [render, setRender] = React.useState()
  const [renderRefs, setRenderRefs] = React.useState([])
  const inputRef = React.createRef()

  React.useEffect(() => {
    buildTextToRender()
  }, [])

  const buildTextToRender = () => {
    const refs = []
    const text = data.substr(typedData.length).split('').map((char, index) => {
      const ref = React.createRef()
      refs.push(ref)
      return <Char ref={ ref } key={ index } char={ char }/>
    })

    setRender(text)
    setRenderRefs(refs)
  }

  const handleChange = () => {
    const value = inputRef.current.value
    const char = renderRefs[value.length-1]
    char.current.type(value[value.length - 1])
    setTypedData(value)
  }

  const handleKeyDown = (event) => {
    if(typedData.length === data.length){
      event.preventDefault()
    }

    if(["Backspace", " "].includes(event.key)){
      event.preventDefault()
    }
  }


  return (
    <div className="type-text">
      <div className="type-text__totype">
        { render }
      </div>
      <div className="type-text__description">Type what you see in the textarea above:</div>
      <input ref={ inputRef } onPaste={ e => e.preventDefault() } onKeyDown={ handleKeyDown } onChange={ e => handleChange(e) } type="text"/>
    </div>
  )
}

export default TypeText