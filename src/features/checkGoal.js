import { block } from "./blockNum"
import { findPlayerPosition } from "./findPlayerPosition"

export const checkGoal = (field, setIsGoal) => {
  const playerPosition = findPlayerPosition(field)
  if (
    field[playerPosition.row + 1][playerPosition.column] == block.goal ||
    field[playerPosition.row - 1][playerPosition.column] == block.goal ||
    field[playerPosition.row][playerPosition.column + 1] == block.goal ||
    field[playerPosition.row][playerPosition.column - 1] == block.goal
  ) {
    setIsGoal(true)
    return true
  }
  return false
}