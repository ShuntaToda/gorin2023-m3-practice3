import { checkToken } from "./checkToken"
import { path } from "./path"

export const getResultsApi = async () => {
  if (!checkToken()) {
    console.log("not Authed")
    return false
  }
  try {
    const res = await fetch(`${path}/results`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `Bearer ${JSON.parse(localStorage.getItem("token"))}`
      },
    })
    const data = await res.json()
    return data
  } catch (e) {
    console.error(e)
  }

}
export const storeResultApi = async (blockMoves, time) => {
  if (!checkToken()) {
    console.log("not Authed")
    return false
  }
  try {
    const res = await fetch(`${path}/results`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
      body: JSON.stringify({
        block_moves: blockMoves,
        time: time,
      })
    })
    const data = await res.json()
    return data
  } catch (e) {
    console.error(e)
  }

}