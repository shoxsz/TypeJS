import React from 'react'

import './main-template.css'

const MainTemplate = ({ children }) => {
  return (
    <div className="main-template">
      { children }
    </div>
  )
}

export default MainTemplate