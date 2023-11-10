export const StartBtn = ({ setIsStart }) => {
  const handleStart = () => {
    setIsStart(true)
  }
  return (
    <div className="absolute top-[229px] w-100 text-center">
      <div className="btn btn-outline-primary" onClick={handleStart}>Start</div>
    </div>
  )
}