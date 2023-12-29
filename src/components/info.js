import React from "react"
import { WiSunset } from "react-icons/wi"
import WeatherIcon from "./WeatherIcon"

function Info({ info, state, loading }) {
  return (
    <div>
      {info ? (
        <div className="info">
          <WeatherIcon description={info.weather[0].description} />
          <p id="sehir">
            {info.name}, {info.sys.country}
          </p>
          <div className="genelDeger">
            <p id="sicaklik">
              {info.main.temp} <WiSunset className="fa-c" />
            </p>
          </div>
          <p>{info.weather[0].description}</p>
        </div>
      ) : (
        <div className="info">
          <div>Bilgi bulunamadı.</div>
        </div>
      )}
    </div>
  )
}

export { Info }
