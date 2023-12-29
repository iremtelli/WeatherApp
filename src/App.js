import "./App.css"
import Form from "./components/form"
import { Info } from "./components/info"
import "./App.css"
import { useState } from "react"

function App() {
  const [info, setInfo] = useState(null)
  const [state, setState] = useState(false)
  const [loading, setLoading] = useState(false)
  return (
    <div className="App">
      <Form
        setInfo={setInfo}
        setState={setState}
        loading={loading}
        setLoading={setLoading}
      />
      <Info info={info} state={state} loading={loading} />
    </div>
  )
}

export default App
