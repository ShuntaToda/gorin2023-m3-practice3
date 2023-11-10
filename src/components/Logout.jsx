import { logoutApi } from "../api/login"

export const Logout = ({ removeLocalToken, removeLocalName }) => {

  const handleLogout = async () => {
    const data = await logoutApi()
    if (data) {
      removeLocalName()
      removeLocalToken()
    }
  }

  return (<div className="btn btn-outline-danger" onClick={handleLogout}>Logout</div>)
}