import React from 'react'

import './timer.css'

const Timer = (ref) => {
  const [startTime, setStartTime] = React.useState(new Date().getTime())
  const [elapsedTime, setElapsedTime] = React.useState(new Date().getTime())

  React.useEffect(() => {
    const interval = setInterval(() => {
      setElapsedTime(new Date().getTime())
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const getTimer = () => {
    const timeDiff = (elapsedTime - startTime) / 1000
    const minutes = Math.floor(timeDiff / 60)
    const seconds = timeDiff - minutes

    return (
      <div className="game-timer">
        <span className="game-timer__unit">{ `${minutes <= 9 && 0 || ''}${minutes}` }</span>
        <span className="game-timer__sep">{ " : " }</span>
        <span className="game-timer__unit">{ `${seconds <= 9 && 0 || ''}${seconds.toFixed(2)}` }</span>
      </div>
    )
  }

  return (<>{ getTimer() }</>)
}

export default React.forwardRef(Timer)