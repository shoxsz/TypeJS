import React from 'react'

const Char = ({ char }, ref) => {
  const [classNames, setClassNames] = React.useState(["type-text__typed", "none"])

  React.useImperativeHandle(
    ref,
    () => ({
      type: (typed) => {
        if(char !== typed){
          setClassNames([ ...classNames, "wrong" ])
          return false
        }else{
          setClassNames([ ...classNames, "right" ])
          return true
        }
      }
    })
  )

  return (
    <span className={ classNames.join(' ') }>
    { char }
    {/* { <JustTyped correct={ char } typed={ typed } show={ isLast } /> } */}
  </span>
  )
}

export default React.forwardRef(Char)