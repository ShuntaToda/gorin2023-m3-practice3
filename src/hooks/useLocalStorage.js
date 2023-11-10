import { useState } from "react"

export const useLocalStorage = (key, initalValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = JSON.parse(localStorage.getItem(key))
      return item ? item : initalValue
    } catch (e) {
      console.error(e)
    }
  })

  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value
      setStoredValue(valueToStore)
      localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (e) {
      console.error(e)
    }
  }

  const removeValue = () => {
    try {
      setStoredValue(null)
      localStorage.removeItem(key);
    } catch (e) {
      console.error(e)
    }
  }

  return [storedValue, setValue, removeValue]
}