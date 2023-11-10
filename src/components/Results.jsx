import { useEffect, useState } from "react"
import { getResultsApi } from "../api/results"

export const Results = () => {
  const [results, setResults] = useState([])

  useEffect(() => {
    const getResults = async () => {
      const data = await getResultsApi()
      console.log(data)
      const sortedData = [...data].sort((a, b) => a.time - b.time)
      const pickedData = [...sortedData].splice(0, 3)
      setResults(pickedData)

    }
    getResults()
  }, [])
  return (
    <div className="absolute w-100 text-center d-flex justify-content-center" style={{ top: "300px" }}>
      <table className="table rounded" style={{ width: "500px" }}>
        <thead>
          <tr>
            <th>user</th>
            <th>time</th>
            <th>block moves</th>
          </tr>
        </thead>
        <tbody>
          {results.map(result => (
            <tr>
              <td>{result.user}</td>
              <td>{result.time}</td>
              <td>{result.block_moves}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}