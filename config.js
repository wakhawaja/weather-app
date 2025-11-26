// config.js — Secure API Key Loader (Works locally, safe on GitHub Pages)

// Default fallback (GitHub Pages will use this)
let WEATHER_API_URL = null;

// Check if apikey.js loaded successfully
if (window.API_KEY) {
  const BASE_URL = "https://api.openweathermap.org/data/2.5/";

  // Build final URLs using your real API key
  WEATHER_API_URL = `${BASE_URL}weather?units=metric&appid=${window.API_KEY}`;
} else {
  console.warn(
    "⚠ API key not found. apikey.js missing (expected on GitHub Pages)."
  );
}

// Export for script.js
export { WEATHER_API_URL };
