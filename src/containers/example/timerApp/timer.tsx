import React, {FC, useEffect, useState} from "react"
import {TimerComp} from "@comp/example/timerApp/timer"

const useTimer = (limitSec: number): [number, VoidFunction] => {
  const [timeLeft, setTimeLeft] = useState(limitSec)

  const reset = (): void => {
    setTimeLeft(limitSec)
  }

  useEffect(() => {
    const tick = (): void => {
      setTimeLeft(prevTime => (prevTime === 0 ? limitSec : prevTime - 1))
    }
    const timerId = setInterval(tick, 1000)
    return (): void => clearInterval(timerId)
  }, [limitSec])

  return [timeLeft, reset]
}

export const TimerCont: FC = () => {
  const LIMIT = 60
  const [timeLeft, reset] = useTimer(LIMIT)
  return <TimerComp timeLeft={timeLeft} reset={reset} />
}
