import { checkToken } from "./checkToken"
import { path } from "./path"

export const loginApi = async (username, password) => {
  if (checkToken()) {
    console.log("isAuthed")
    return false
  }
  try {
    const res = await fetch(`${path}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        username: username,
        password: password
      })
    })
    console.log(res.ok)
    const data = await res.json()
    return data
  } catch (e) {
    console.error(e)
  }

}
export const logoutApi = async () => {
  if (!checkToken()) {
    console.log("not Authed")
    return false
  }
  try {
    const res = await fetch(`${path}/auth/logout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `Bearer ${JSON.parse(localStorage.getItem("token"))}`
      },
    })
    console.log(res.ok)
    const data = await res.json()
    return data
  } catch (e) {
    console.error(e)
  }

}