import { useState, useEffect } from 'react'
import './App.css'
import clients from './clients.json'



const App = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    setData(clients.data)

  }, [])

  return (
    <div className="App">
      <p>Hello world!</p>
      <pre>{data ? JSON.stringify(data[0], null, '  ') : null}</pre>
      {data && data[0].name}
    </div>
  )
}

export default App
