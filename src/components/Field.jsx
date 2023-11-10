import { useEffect } from "react"
import { block } from "../features/blockNum"

export const Field = ({ field }) => {
  return (
    <div class="Grid absolute top-[229px]  flex flex-row flex-wrap items-start justify-start border-8 border-black" style={{
      left: "50%", translate: "-50%",
      width: (field[0].length - 2) * 87 + 16 + "px"
    }}>
      {field.map((row, index) => {
        if (!(index == 0 || field.length - 1 == index)) {
          return row.map((item, index) => {
            if (!(index == 0 || row.length - 1 == index)) {

              if (item == block.space) {
                return <div class="Cell h-[87px] w-[87px] border border-stone-300 bg-white"></div>
              } else if (item == block.wall) {
                return <div class="CellIsWall h-[87px] w-[87px] border border-stone-300 bg-gradient-to-br from-neutral-900 to-zinc-600"></div>
              } else if (item == block.player) {
                return (
                  <div className="bg-white  h-[87px] w-[87px] d-flex justify-content-center align-items-center">
                    <div class="Man h-11 w-11 rounded-[100px] border-4 border-lime-400 bg-yellow-400"></div>
                  </div>
                )
              } else if (item == block.block) {
                return <div class="Cell h-[87px] w-[87px] bg-lime-500"></div>
              } else if (item == block.goal) {
                return (
                  <div class="Cell flex h-[87px] w-[87px] items-center justify-center border border-stone-300 bg-red-700">
                    <div class="h-[87px] w-[87px] text-center font-['Inter'] text-base font-normal text-white">ゴール</div>
                  </div>
                )
              }
            }
          })
        }
      })}



    </div>
  )
}