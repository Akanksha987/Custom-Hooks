import React from 'react'
import './App.css'
import useStorage from './components/useStorage'
function App() {
  const [value, setValue] = useStorage('value','')
  return (
    <div>
      <input type="text" value={value} onChange={e=>setValue(e.target.value)} />
    </div>
  )
}

export default App