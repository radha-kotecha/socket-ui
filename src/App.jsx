import { useState } from 'react'
import { Route, Routes } from "react-router-dom";
import './App.css'

const DynamicUI = () => {
  return <div>Dynamic UI</div>
}

const Modeling = () => {
  return <div>
    <h1>Modeling</h1>
    <Routes>
      <Route path="/dynamic-ui" element={<DynamicUI />} />
    </Routes>
  </div>
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Routes>
        <Route path="/modeling/*" element={<Modeling />} />
      </Routes>
    </div>
  )
}

export default App
