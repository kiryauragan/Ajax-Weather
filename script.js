const apiKey = "1bd2d52a59f65c413942f9ae5aab7769";
const apiUrl = "http://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchCity = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

const city = document.querySelector(".city");
const description = document.querySelector(".description");
const temp = document.querySelector(".temp");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");
const pressure = document.querySelector(".pressure");
const winddegree = document.querySelector(".winddegree");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
  }

  let data = await response.json();

  console.log(data);

  city.innerHTML = data.name;
  description.innerHTML = data.weather[0].description;
  temp.innerHTML = Math.round(data.main.temp) + " °c";
  humidity.innerHTML = data.main.humidity + " %";
  wind.innerHTML = data.wind.speed + " km/h";
  pressure.innerHTML = data.main.pressure + " Pa";
  winddegree.innerHTML = data.wind.deg;

  switch (data.weather[0].main) {
    case "Clouds":
      weatherIcon.src = "img/clouds.png";
      break;
    case "Rain":
      weatherIcon.src = "img/rain.png";
      break;
    case "Drizzle":
      weatherIcon.src = "img/drizzle.png";
      break;
    case "Mist":
      weatherIcon.src = "img/mist.png";
      break;
    case "Clear":
      weatherIcon.src = "img/clear.png";
      break;
    case "Snow":
      weatherIcon.src = "img/snow.png";
      break;
    default:
      weatherIcon.src = "img/clear.png";
      break;
  }

  document.querySelector(".weather").style.display = "block";
  document.querySelector(".error").style.display = "none";
}

searchButton.addEventListener("click", () => {
  checkWeather(searchCity.value);
});
