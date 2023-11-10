import { useEffect } from "react"

export const Timer = ({ isStart, time, setTime }) => {

  useEffect(() => {
    let interval
    if (isStart) {
      interval = setInterval(() => {
        return setTime(prevTime => prevTime + 1)
      }, 100)
    }
    return () => clearInterval(interval)

  }, [isStart])
  return (
    <div class="00 text-center font-['Inter'] text-[74.67px] font-normal text-white">{time}</div>
  )
}