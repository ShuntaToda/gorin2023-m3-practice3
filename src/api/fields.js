import { checkToken } from "./checkToken"
import { path } from "./path"

export const getFieldApi = async () => {
  if (!checkToken()) {
    console.log("not Authed")
    return false
  }
  try {
    const res = await fetch(`${path}/fields`, {
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