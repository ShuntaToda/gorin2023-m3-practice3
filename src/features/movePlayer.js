import { block } from "./blockNum"
import { findPlayerPosition } from "./findPlayerPosition"

export const moveRight = (field, setField, setMoveBlocks) => {
  const playerPosition = findPlayerPosition(field)
  if (field[playerPosition.row][playerPosition.column + 1] == block.space) {
    setField(prevField => {
      prevField[playerPosition.row][playerPosition.column + 1] = block.player
      prevField[playerPosition.row][playerPosition.column] = block.space
      return [...prevField]
    })
    setMoveBlocks(prevMoveBlocks => prevMoveBlocks + 1)
  } else if (
    field[playerPosition.row][playerPosition.column + 1] == block.block &&
    field[playerPosition.row][playerPosition.column + 2] == block.space) {
    setField(prevField => {
      prevField[playerPosition.row][playerPosition.column] = block.space
      prevField[playerPosition.row][playerPosition.column + 1] = block.player
      prevField[playerPosition.row][playerPosition.column + 2] = block.block
      return [...prevField]
    })

    setMoveBlocks(prevMoveBlocks => prevMoveBlocks + 1)
  }
}
export const moveLeft = (field, setField, setMoveBlocks) => {
  const playerPosition = findPlayerPosition(field)
  if (field[playerPosition.row][playerPosition.column - 1] == block.space) {
    setField(prevField => {
      prevField[playerPosition.row][playerPosition.column - 1] = block.player
      prevField[playerPosition.row][playerPosition.column] = block.space
      return [...prevField]
    })
    setMoveBlocks(prevMoveBlocks => prevMoveBlocks + 1)
  } else if (
    field[playerPosition.row][playerPosition.column - 1] == block.block &&
    field[playerPosition.row][playerPosition.column - 2] == block.space) {
    setField(prevField => {
      prevField[playerPosition.row][playerPosition.column] = block.space
      prevField[playerPosition.row][playerPosition.column - 1] = block.player
      prevField[playerPosition.row][playerPosition.column - 2] = block.block
      return [...prevField]
    })

    setMoveBlocks(prevMoveBlocks => prevMoveBlocks + 1)
  }
}
export const moveUp = (field, setField, setMoveBlocks) => {
  const playerPosition = findPlayerPosition(field)
  if (field[playerPosition.row - 1][playerPosition.column] == block.space) {
    setField(prevField => {
      prevField[playerPosition.row - 1][playerPosition.column] = block.player
      prevField[playerPosition.row][playerPosition.column] = block.space
      return [...prevField]
    })
    setMoveBlocks(prevMoveBlocks => prevMoveBlocks + 1)
  } else if (
    field[playerPosition.row - 1][playerPosition.column] == block.block &&
    field[playerPosition.row - 2][playerPosition.column] == block.space) {
    setField(prevField => {
      prevField[playerPosition.row][playerPosition.column] = block.space
      prevField[playerPosition.row - 1][playerPosition.column] = block.player
      prevField[playerPosition.row - 2][playerPosition.column] = block.block
      return [...prevField]
    })

    setMoveBlocks(prevMoveBlocks => prevMoveBlocks + 1)
  }
}
export const moveDown = (field, setField, setMoveBlocks) => {
  const playerPosition = findPlayerPosition(field)
  if (field[playerPosition.row + 1][playerPosition.column] == block.space) {
    setField(prevField => {
      prevField[playerPosition.row + 1][playerPosition.column] = block.player
      prevField[playerPosition.row][playerPosition.column] = block.space
      return [...prevField]
    })
    setMoveBlocks(prevMoveBlocks => prevMoveBlocks + 1)
  } else if (
    field[playerPosition.row + 1][playerPosition.column] == block.block &&
    field[playerPosition.row + 2][playerPosition.column] == block.space) {
    setField(prevField => {
      prevField[playerPosition.row][playerPosition.column] = block.space
      prevField[playerPosition.row + 1][playerPosition.column] = block.player
      prevField[playerPosition.row + 2][playerPosition.column] = block.block
      return [...prevField]
    })

    setMoveBlocks(prevMoveBlocks => prevMoveBlocks + 1)
  }
}