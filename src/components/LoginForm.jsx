import { useRef } from "react"
import { loginApi } from "../api/login"

export const LoginForm = ({ setLocalToken, setLocalName }) => {
  const usernameRef = useRef(null)
  const passwordRef = useRef(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(passwordRef.current.value)
    const data = await loginApi(usernameRef.current.value, passwordRef.current.value)
    if (data) {
      setLocalToken(data.token)
      setLocalName(data.username)
    }
  }
  return (
    <div className="mt-5 border container bg-white rounded" style={{ left: "50%", width: "500px" }}>
      <div className="p-3">
        <h3>Login</h3>
        <div className="mt-3">
          <form action="" onSubmit={handleSubmit}>
            <div className="input-group mb-3">
              <span className="input-group-text">username</span>
              <input ref={usernameRef} className="form-control" type="text" />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text">password</span>
              <input ref={passwordRef} className="form-control" type="password" />
            </div>
            <button type="submit" className="btn btn-outline-primary">決定</button>
          </form>

        </div>
      </div>
    </div>
  )
}