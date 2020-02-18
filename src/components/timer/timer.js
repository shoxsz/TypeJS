import React from 'react'

import './timer.css'

const currentTime = () => new Date().getTime()

const startTimer = () => {
  const current = currentTime()
  return { start: current, elapsed: current }
}

const tickTimer = (timer) => {
  return {
    start: timer.start,
    elapsed: currentTime()
  }
}

const Timer = (props, ref) => {
  const [timer, setTimer] = React.useState(startTimer)
  const [stop, setStop] = React.useState(true)

  const intervalRef = React.useRef()

  React.useEffect(() => {
    if(props.stop){
      stopT()
    }else{
      startT()
    }
  }, [props.stop])

  React.useEffect(() => {
    if(!stop){
      intervalRef.current = setInterval(tickT, 1000)
    }else{
      clearInterval(intervalRef.current)
    }
  }, [stop])

  React.useImperativeHandle(
    ref,
    () => ({
      stop: stopT,
      start: startT
    })
  )

  //timer functions
  const stopT = () => {
    setTimer(startTimer())
    setStop(true)
  }

  const startT = () => {
    setTimer(startTimer())
    setStop(false)
  }

  const tickT = () => {
    setTimer(tickTimer(timer))
  }

  const getTimer = () => {
    const timeDiff = (timer.elapsed - timer.start) / 1000
    const minutes = Math.floor(timeDiff / 60)
    const seconds = timeDiff - minutes

    return (
      <div className="game-timer">
        <span className="game-timer__unit">{ `${minutes <= 9 && '0' || ''}${minutes}` }</span>
        <span className="game-timer__sep">{ " : " }</span>
        <span className="game-timer__unit">{ `${seconds <= 9 && '0' || ''}${seconds.toFixed(2)}` }</span>
      </div>
    )
  }

  return (<>{ getTimer() }</>)
}

export default React.forwardRef(Timer)