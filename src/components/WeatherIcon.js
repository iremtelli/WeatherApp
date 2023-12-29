const arr = [
  {
    key: "açık",
    img: "https://basmilius.github.io/weather-icons/production/fill/all/clear-day.svg",
  },
  {
    key: "kapalı",
    img: "https://basmilius.github.io/weather-icons/production/fill/all/overcast.svg",
  },
  {
    key: "sisli",
    img: "https://basmilius.github.io/weather-icons/production/fill/all/fog.svg",
  },
  {
    key: "az bulutlu",
    img: "https://basmilius.github.io/weather-icons/production/fill/all/overcast-day.svg",
  },
  {
    key: "hafif yağmur",
    img: "https://basmilius.github.io/weather-icons/production/fill/all/drizzle.svg",
  },
  {
    key: "parçalı yağmur",
    img: "https://basmilius.github.io/weather-icons/production/fill/all/partly-cloudy-day.svg",
  },
  {
    key: "parçalı az bulutlu",
    img: "https://basmilius.github.io/weather-icons/production/fill/all/overcast-night.svg",
  },
  {
    key: "yağmur",
    img: "https://basmilius.github.io/weather-icons/production/fill/all/rain.svg",
  },
  {
    key: "default",
    img: "https://basmilius.github.io/weather-icons/production/fill/all/not-available.svg",
  },
]

const WeatherIcon = ({ description }) => {
  const selectedWeather = arr.find((item) => item.key === description)

  if (!selectedWeather) {
    return <img width={75} height={75} src={arr.pop().img} alt="Weather Icon" />
  }

  return (
    <img width={75} height={75} src={selectedWeather.img} alt="Weather Icon" />
  )
}

export default WeatherIcon
