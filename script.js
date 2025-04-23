const WEATHER_API =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const API_KEY = "c95fe8a71eb677f51093188a8b8f91d5";

const searchBox = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");

async function checkWeather(city) {
  const res = await fetch(WEATHER_API + city + `&appid=${API_KEY}`);
  var data = await res.json();
  console.log(data);

  if (data.cod == "404") {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
    return;
  }

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

  if (data.weather[0].main == "Clouds") {
    document.querySelector(".icon").src = "images/clouds.png";
  } else if (data.weather[0].main == "Rain") {
    document.querySelector(".icon").src = "images/rain.png";
  } else if (data.weather[0].main == "Drizzle") {
    document.querySelector(".icon").src = "images/drizzle.png";
  } else if (data.weather[0].main == "Mist") {
    document.querySelector(".icon").src = "images/mist.png";
  } else if (data.weather[0].main == "Clear") {
    document.querySelector(".icon").src = "images/clear.png";
  } else if (data.weather[0].main == "Snow") {
    document.querySelector(".icon").src = "images/snow.png";
  } else {
    document.querySelector(".icon").src = "images/clear.png";
  }

  document.querySelector(".error").style.display = "none";
  document.querySelector(".weather").style.display = "block";
}

searchButton.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
