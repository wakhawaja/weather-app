const apiKey = "628e4730e503de79d3a0767c6abffdf2";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const loader = document.getElementById("loader");

// Show loader
function showLoader() {
  loader.style.display = "block";
}

// Hide loader
function hideLoader() {
  loader.style.display = "none";
}

// Fetch weather
async function checkWeather(city) {
  showLoader();

  try {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status == 404) {
      hideLoader();
      document.querySelector(".city").innerHTML = "City Not Found";
      document.querySelector(".temp").innerHTML = "—";
      document.querySelector(".humidity").innerHTML = "—";
      document.querySelector(".wind").innerHTML = "—";
      weatherIcon.src = "images/error.png";
      return;
    }

    const data = await response.json();

    // Update text
    document.querySelector(".city").innerHTML =
      data.name + ", " + data.sys.country;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";
    document.querySelector("h3").innerHTML = data.weather[0].main;

    // Weather icons
    const weatherType = data.weather[0].main.toLowerCase();

    if (weatherType.includes("cloud")) {
      weatherIcon.src = "images/clouds.png";
    } else if (weatherType.includes("clear")) {
      weatherIcon.src = "images/clear.png";
    } else if (weatherType.includes("rain")) {
      weatherIcon.src = "images/rain.png";
    } else if (weatherType.includes("drizzle")) {
      weatherIcon.src = "images/drizzle.png";
    } else if (weatherType.includes("mist")) {
      weatherIcon.src = "images/mist.png";
    } else if (weatherType.includes("snow")) {
      weatherIcon.src = "images/snow.png";
    } else {
      weatherIcon.src = "images/clouds.png"; // default
    }
  } catch (err) {
    console.log("Error:", err);
  }

  hideLoader();
}

// Search button
searchBtn.addEventListener("click", () => {
  if (searchBox.value.trim() !== "") {
    checkWeather(searchBox.value);
  }
});

// Enter key search
searchBox.addEventListener("keyup", (e) => {
  if (e.key === "Enter" && searchBox.value.trim() !== "") {
    checkWeather(searchBox.value);
  }
});

// ⭐ Load Lahore weather on page start
window.onload = () => {
  checkWeather("Lahore");
};
