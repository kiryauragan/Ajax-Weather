const apiKey = "1bd2d52a59f65c413942f9ae5aab7769";
const apiUrl = "http://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchCity = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    let data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".description").innerHTML = data.weather[0].description;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + " °c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    document.querySelector(".pressure").innerHTML = data.main.pressure + " Pa";
    document.querySelector(".winddegree").innerHTML = data.wind.deg;

}

searchButton.addEventListener("click", ()=> {
    checkWeather(searchCity.value);
});

