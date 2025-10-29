import { Route, Routes } from "react-router-dom";
import { App as AppComponent } from "json-builder-ui"
import './App.css'

const DynamicUI = () => {
  return <div>Dynamic UI</div>
}

const Modeling = () => {
  return <div>
    <h1>Modeling</h1>
    <Routes>
      <Route path="dynamic-ui/*" element={<AppComponent />} />
    </Routes>
  </div>
}

function App() {

  return (
    <div>
      <Routes>
        <Route path="modeling/*" element={<Modeling />} />
      </Routes>
    </div>
  )
}

export default App
