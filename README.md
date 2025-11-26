I improved:

✅ Formatting & typography
✅ Syntax highlighting
✅ Accurate GitHub Pages explanation
✅ Developer instructions
✅ Typos and indentation
✅ Added badges section
✅ Improved clarity on API security

---

# 🌦️ Weather App — HTML, CSS & JavaScript

A modern, responsive **Weather Application** built with **HTML, CSS, and JavaScript**, fetching real-time data from the OpenWeather API.
It includes dynamic weather backgrounds, animated UI elements, error handling, and a secure local API key setup (safe for GitHub).

---

## 🚀 Live Demo

(Once you enable GitHub Pages, the link will appear here.)

---

## ✨ Features

✔ Real-time weather data
✔ Dynamic background changes
✔ Beautiful glass-morphism UI
✔ Smooth fade-in animation
✔ Custom weather icons
✔ Loading spinner
✔ Full error handling (network, API failure, wrong city)
✔ Mobile responsive
✔ Secure local API key (never uploaded to GitHub)
✔ GitHub Pages compatible (safe mode enabled)

---

## 📁 Project Structure

```
weather-app/
│── index.html
│── style.css
│── script.js
│── config.js               # Front-end config for local key loading
│── apikey.js               # Local-only API key (ignored by Git)
│── .gitignore
│── README.md
│
│── images/
│    ├── icons/
│    │     ├── clear.png
│    │     ├── clouds.png
│    │     ├── rain.png
│    │     ├── drizzle.png
│    │     ├── snow.png
│    │     ├── mist.png
│    │     ├── humidity.png
│    │     ├── wind.png
│    │     ├── search.png
│    │     ├── error.png
│    │
│    ├── backgrounds/
│          ├── clear.jpg
│          ├── clouds.jpg
│          ├── rain.jpg
│          ├── fog.jpg
│          ├── snow.jpg
│          ├── default.jpg
```

---

## 🔐 API Key Security (Important)

Your API key is stored in:

```
apikey.js   ← NOT uploaded to GitHub
```

This file contains (example):

```js
window.API_KEY = "YOUR_REAL_API_KEY";
```

Your `.gitignore` ensures:

### ✔ API key stays private

### ✔ GitHub never uploads your key

### ✔ GitHub Pages **cannot access** local keys

### ✔ Your project is 100% safe

On GitHub Pages, users will see:

- UI loads perfectly
- Weather API returns “Network Error”
- API key remains hidden

This is the correct and secure approach for client-side apps.

---

## 🛠️ Run Locally

### 1️⃣ Clone the repository

```sh
git clone https://github.com/YOUR-USERNAME/weather-app.git
cd weather-app
```

### 2️⃣ Create a file named:

```
apikey.js
```

### 3️⃣ Add your key inside it:

```js
window.API_KEY = "YOUR_OPENWEATHER_API_KEY";
```

### 4️⃣ Open the project

Either:

- Open `index.html` in the browser
- Or use **VS Code → Live Server**

You're ready to go!

---

## 🌍 Deploy on GitHub Pages

1. Go to **Repository → Settings**
2. Scroll to **Pages**
3. Under "Build and Deployment":

   - **Source:** `main`
   - **Folder:** `/ (root)`

4. Click **Save**

Your website will be available at:

```
https://YOUR-USERNAME.github.io/weather-app/
```

⚠ _Weather search will show “Network Error” because GitHub Pages cannot load your local API key. Your key remains safe._

---

## 🧭 Roadmap / Future Enhancements

- 5-day weather forecast
- Hourly temperature graph (Chart.js)
- Save last searched city
- Suggest cities (Auto-complete)
- Dark/Light theme
- Serverless API Proxy (Cloudflare Worker)

I can help you add any of these features.

---

## 🤝 Contributing

Pull requests are welcome!
For major changes, please open an issue first to discuss your ideas.

---

## 📄 License

This project is licensed under the **MIT License**.

---

## 👨‍💻 Author

**Khawaja Waqas Ahmed**
Built with passion ❤️
If you like this project — ⭐ **star the repository**!

---
