export const checkToken = () => {
  if (localStorage.getItem("token")) {
    return true
  }
  return false
}