import React, {FC, useEffect, useState} from "react"
import {HogeComp} from "@comp/hoge"

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

export const HogeCont: FC = () => {
  const LIMIT = 60
  const [timeLeft, reset] = useTimer(LIMIT)
  return <HogeComp timeLeft={timeLeft} reset={reset} />
}
