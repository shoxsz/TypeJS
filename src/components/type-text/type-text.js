import React from 'react'

import './type-text.css'

const TypeText = ({ data }) => {
  return (
    <div className="type-text">
      <textarea>
        { data }
      </textarea>
      <div className="__description">Type what you see in the textarea above</div>
      <input type="text"/>
    </div>
  )
}

export default TypeText