import React from 'react'
import CountUp, { useCountUp } from 'react-countup'

const CountUpExample = () => {
  const {countUp, start, pauseResume, reset, update} = useCountUp({
    decimals: 2,
    suffix: 'USD',
    end: 10000,
    duration: 100,
    startOnMount: false
  })
  return (
    <div>
      <div>
        <h1>{countUp}</h1>
        <button onClick={start}>Start</button>
        <button onClick={reset}>Reset</button>
        <button onClick={pauseResume}>Pause</button>
        <button onClick={() => update(2000)}>Update to 2000</button>
      </div>
      <CountUp end={400} /><br />
      <CountUp end={400} duration={5} /><br />
      <CountUp end={400} start={100} /><br />
      <CountUp end={400} prefix={'$'} decimals={2} /><br />
      <CountUp end={400} suffix={'USD'} decimals={2} /><br />
    </div>
  )
}

export default CountUpExample
