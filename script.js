// =========================================================
// WEATHER APP (Optimized Version)
// =========================================================

import { API_KEY } from "./apikey.js";

// Base OpenWeather URL (metric + city name)
const BASE_URL =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

// DOM Elements
const cityInput = document.getElementById("city-input");
const searchBtn = document.getElementById("search-btn");

const weatherIcon = document.getElementById("weather-icon");
const temp = document.getElementById("temperature");
const cityName = document.getElementById("city-name");
const desc = document.getElementById("description");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");

const loader = document.getElementById("loader");
const weatherBox = document.getElementById("weather-box");

// =========================================================
// BACKGROUND HANDLER
// =========================================================
function updateBackground(weatherType) {
  const bgMap = {
    Clear: "clear.jpg",
    Clouds: "clouds.jpg",
    Rain: "rain.jpg",
    Drizzle: "rain.jpg",
    Thunderstorm: "rain.jpg",
    Snow: "snow.jpg",
    Mist: "fog.jpg",
    Fog: "fog.jpg",
    Smoke: "fog.jpg",
    Haze: "fog.jpg",
    Dust: "fog.jpg",
  };

  const bg = bgMap[weatherType] || "default.jpg";

  document.body.style.background = `url("images/backgrounds/${bg}") no-repeat center/cover`;
}

// =========================================================
// LOADING SPINNER HANDLER
// =========================================================
function showLoader() {
  loader.classList.remove("hidden");
  weatherBox.classList.add("hidden");
}

function hideLoader() {
  loader.classList.add("hidden");
  weatherBox.classList.remove("hidden");
}

// =========================================================
// MAIN WEATHER FETCH FUNCTION
// =========================================================
async function getWeather(city) {
  if (!city) return;

  showLoader();

  try {
    const response = await fetch(`${BASE_URL}${city}&appid=${API_KEY}`);
    const data = await response.json();

    // ------------ Error Handlers ------------
    if (!response.ok || data.cod === "404") {
      showError("City Not Found");
      hideLoader();
      return;
    }

    // ------------ Update UI ------------
    temp.textContent = `${Math.round(data.main.temp)}°C`;
    cityName.textContent = data.name;
    desc.textContent = data.weather[0].description;
    humidity.textContent = data.main.humidity;
    wind.textContent = Math.round(data.wind.speed);

    const type = data.weather[0].main;

    const iconMap = {
      Clear: "clear.png",
      Clouds: "clouds.png",
      Rain: "rain.png",
      Drizzle: "drizzle.png",
      Snow: "snow.png",
      Mist: "mist.png",
      Fog: "mist.png",
      Smoke: "mist.png",
      Haze: "mist.png",
    };

    weatherIcon.src = `images/icons/${iconMap[type] || "clear.png"}`;

    updateBackground(type);
  } catch (error) {
    showError("Network Error");
  }

  hideLoader();
}

// =========================================================
// ERROR DISPLAY
// =========================================================
function showError(message) {
  weatherIcon.src = "images/icons/error.png";
  temp.textContent = "--°C";
  cityName.textContent = message;
  desc.textContent = "—";
  humidity.textContent = "--";
  wind.textContent = "--";

  updateBackground("default");
}

// =========================================================
// EVENT LISTENERS
// =========================================================
searchBtn.addEventListener("click", () => {
  getWeather(cityInput.value.trim());
});

cityInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    getWeather(cityInput.value.trim());
  }
});
// =========================================================
// INITIAL LOAD
// =========================================================
getWeather("New York");
// =========================================================
// END OF SCRIPT
