import { useState } from "react"
import axios from "axios"

function Form({ setState, setInfo, loading, setLoading }) {
  const [city, setCity] = useState("")

  const handleChange = async () => {
    const api = "016d0ab8f458e4f77d8032e73db45155"
    const baseURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric&lang=tr`
    setLoading(true)
    axios(baseURL)
      .then((res) => setInfo(res.data))
      .catch((err) => setInfo(null))
      .finally(() =>
        setTimeout(() => {
          setLoading(false)
        }, 1000)
      )
    setState(true)
  }
  return (
    <div className="container">
      <h1>Hava Durumu</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          handleChange()
        }}
      >
        <div className="form">
          <input
            onChange={(e) => setCity(e.target.value)}
            className="İnputText"
            type="text"
            placeholder="Şehri Giriniz..."
          />
        </div>
        <div className="btnDiv">
          <button type="Submit" className="btn">
            {!loading ? (
              <span>Get Weather</span>
            ) : (
              <img
                width={28}
                height={28}
                alt="loading"
                src="https://basmilius.github.io/weather-icons/production/line/all/clear-day.svg"
              />
            )}
          </button>
        </div>
      </form>
    </div>
  )
}

export default Form
