import React, { useState, useRef } from "react"

const RefComponent = () => {
  const [stateNumber, setStateNumber] = useState(0)
  const numRef = useRef(0)

  function incrementAndDelayLogging() {
    // setStateNumber(stateNumber + 1)
    numRef.current++
    // setTimeout(
    //     () => alert(`state: ${stateNumber} | ref: ${numRef.current}`),
    //     5000
    // )
  }
  return (
      <div>
        <h1>solving closure by useRef</h1>
        <button onClick={incrementAndDelayLogging}>alert in setTimeout</button>
        <h4>state: {stateNumber}</h4>
        <h4>ref: {numRef.current}</h4>
      </div>
  )
}

export default RefComponent
