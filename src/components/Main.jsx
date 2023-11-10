import { useEffect, useState } from "react"
import { Field } from "./Field"
import { useLocalStorage } from "../hooks/useLocalStorage"
import { LoginForm } from "./LoginForm"
import { Logout } from "./Logout"
import { getFieldApi } from "../api/fields"
import { moveDown, moveLeft, moveRight, moveUp } from "../features/movePlayer"
import { checkGoal } from "../features/checkGoal"
import { StartBtn } from "./StartBtn"
import { Timer } from "./Timer"
import { MoveCounter } from "./MoveCounter"
import { Results } from "./Results"
import { storeResultApi } from "../api/results"

export const Main = () => {
  const [field, setField] = useState([])
  const [localToken, setLocalToken, removeLocalToken] = useLocalStorage("token", null)
  const [localName, setLocalName, removeLocalName] = useLocalStorage("name", "ゲスト")
  const isAuthed = !!localToken

  const [time, setTime] = useState(0)
  const [moveBlocks, setMoveBlocks] = useState(0)

  const [isGoal, setIsGoal] = useState(false)
  const [isStart, setIsStart] = useState(false)


  const [localField, setLocalField, removeLocalField] = useLocalStorage("field", null)
  const [localTime, setLocalTime, removeLocalTime] = useLocalStorage("time", null)
  const [localMoveBlocks, setLocalMoveBlocks, removeLocalMoveBlocks] = useLocalStorage("moveBlocks", null)


  const resetGame = () => {
    setField(getField)
    setTime(0)
    setMoveBlocks(0)
    setIsGoal(false)
    removeLocalField()
    removeLocalTime()
    removeLocalMoveBlocks()
  }

  const handleKeyDown = (e) => {
    if (e.key == "ArrowUp") {
      moveUp(field, setField, setMoveBlocks)
    } else if (e.key == "ArrowDown") {
      moveDown(field, setField, setMoveBlocks)
    } else if (e.key == "ArrowRight") {
      moveRight(field, setField, setMoveBlocks)
    } else if (e.key == "ArrowLeft") {
      moveLeft(field, setField, setMoveBlocks)
    }
  }

  const getField = async () => {
    const data = await getFieldApi()
    if (data) {
      setField(data.objects)
    }
  }
  useEffect(() => {
    if (localField) {
      setField(localField)
      setTime(localTime)
      setMoveBlocks(localMoveBlocks)
    } else {
      getField()
    }
  }, [])

  useEffect(() => {
    if (field[0] && isStart) {
      checkGoal(field, setIsGoal)
      setLocalField(field)
      setLocalTime(time)
      setLocalMoveBlocks(moveBlocks)
    }
    if (isStart) {
      document.addEventListener("keydown", handleKeyDown)
    }
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [field, isStart])

  useEffect(() => {
    const storeResult = async () => {
      const data = await storeResultApi(moveBlocks, time)
    }
    if (isGoal) {
      storeResult()
      setIsStart(false)
      resetGame()
    }
  }, [isGoal])


  useEffect(() => {
    console.log("move")
  }, [moveBlocks])
  useEffect(() => {
    console.log("time!")
  }, [time])

  return (
    <>
      {
        !isAuthed ?
          <LoginForm setLocalToken={setLocalToken} setLocalName={setLocalName} />
          : (
            < div class="inline-flex h-[868px] w-[1438px] flex-row flex-col items-start justify-start bg-white px-[19px] py-[18px]">
              <div class="Frame relative h-[832px] w-[1400px] bg-gradient-to-br from-orange-400 to-orange-400">

                <div class="Header absolute left-[583px] top-[42px] inline-flex flex-col items-center justify-start gap-[19px]">
                  <Timer isStart={isStart} time={time} setTime={setTime} />
                  <MoveCounter moveBlocks={moveBlocks} isStart={isStart} />

                </div>
                <div className="absolute left-[1124px] top-[68px] text-center">
                  <div class=" font-['Inter'] text-base font-bold text-white">{localName}さん</div>
                  <Logout removeLocalName={removeLocalName} removeLocalToken={removeLocalToken} />
                </div>
                {!isStart &&
                  <Results />
                }
                {field[0] && isStart ?
                  <Field field={field} />
                  : <StartBtn setIsStart={setIsStart} />
                }
              </div>
            </div >
          )
      }
    </>
  )
}