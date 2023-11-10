import { block } from "./blockNum"

export const findPlayerPosition = (field) => {
  let playerRowIndex = 0
  let playerColumnIndex = 0
  playerRowIndex = field.findIndex(row => {
    const rowResult = row.findIndex(item => item == block.player)
    if (rowResult !== -1) {
      playerColumnIndex = rowResult
      return true
    }
  })
  return { row: playerRowIndex, column: playerColumnIndex }
}