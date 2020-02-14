import React from 'react'

import './type-text.css'

const TypeText = ({ data }) => {
  const [typedData, setTypedData] = React.useState('')
  const inputRef = React.createRef()

  const handleChange = () => {
    setTypedData(inputRef.current.value)
  }

  const handleKeyDown = (event) => {
    if(typedData.length === data.length){
      event.preventDefault()
    }

    if(["Backspace", " "].includes(event.key)){
      event.preventDefault()
    }
  }

  const renderData = () => {
    const typedSpans = typedData.split('').map((str, index) => {
      const typedChar = typedData.charAt(index)
      const correctChar = data.charAt(index)

      if(correctChar !== typedChar){
        return <span key={ index } className="type-text__typed wrong">{ correctChar }</span>
      }

      return <span key={ index } className="type-text__typed right">{ correctChar }</span>
    })

    const typedNoneSpans = data.substr(typedData.length).split('').map((char, index) => {
      return <span key={ index } className="type-text__typed none">{ char }</span>
    })

    return (
      <div className="type-text__totype">
        { typedSpans }{ typedNoneSpans }
      </div>
    )
  }

  return (
    <div className="type-text">
      { renderData() }
      <div className="type-text__description">Type what you see in the textarea above:</div>
      <input ref={ inputRef } onPaste={ e => e.preventDefault() } onKeyDown={ handleKeyDown } onChange={ e => handleChange(e) } type="text"/>
    </div>
  )
}

export default TypeText