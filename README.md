# Weather Now 🌤️

**Weather Now** is a real-time weather application designed for outdoor enthusiasts who need quick, accurate weather updates. This app provides weather conditions such as temperature, wind speed, and cloud status for any city worldwide. Additionally, it offers a dynamic background that changes from day to night based on real-time sunrise and sunset data.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Acknowledgments](#acknowledgments)
- [License](#license)

## Demo

Try the live version here: [Weather Now on StackBlitz](https://your-project-name.stackblitz.io)

## Features

- **Real-Time Weather Data**: Retrieves weather details like temperature, wind speed, and conditions.
- **Dynamic Day/Night Backgrounds**: Automatically adjusts the background to day or night based on the selected city’s time.
- **Animated Effects**: Features butterflies for day mode and scattered stars for night mode.
- **User-Friendly Interface**: Simple, responsive design for quick access to weather information.
  
## Technologies Used

- **React**: For building the user interface.
- **Open-Meteo API**: To retrieve weather data and coordinates based on user input.
- **CSS Animations**: Adds animations for day and night effects.

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/weather-now.git
   ```
2. Navigate to the project directory:
   ```bash
   cd weather-now
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run the application:
   ```bash
   npm start
   ```
   The app should now be running on `https://vitejsvitejihkzj-zopl--5173--f565b097.local-credentialless.webcontainer.io/`.

## Usage

1. Enter the name of a city in the input field and click "Get Weather".
2. The app fetches and displays the weather information, including:
   - Temperature (in Celsius)
   - Wind speed
   - Current weather conditions
3. The background will switch to either **day mode** or **night mode** based on the selected city’s real-time conditions (sunrise and sunset).

## Project Structure

```
.
├── public
│   ├── index.html        # Main HTML file
├── src
│   ├── api
│   │   └── fetchWeather.js   # Handles API requests
│   ├── components
│   │   └── WeatherCard.jsx   # Displays weather info
│   ├── utils
│   │   └── weatherHelpers.js # Utility for day/night mode detection
│   ├── App.css               # Global styles
│   ├── App.jsx               # Main application component
│   └── index.jsx             # Application entry point
└── README.md
```

## API Details

This application uses the **Open-Meteo API** to retrieve weather data.

- **Geocoding Endpoint**: `https://geocoding-api.open-meteo.com/v1/search`
  - Retrieves latitude and longitude based on city name input.
- **Weather Endpoint**: `https://api.open-meteo.com/v1/forecast`
  - Retrieves weather data including temperature, wind speed, and weather conditions based on coordinates.
  
> **Note**: Ensure the correct time zone is set for accurate day/night detection.

## Acknowledgments

This project was developed as part of a learning exercise to explore real-time weather applications and integrate API data with frontend development.

## License

This project is licensed under the MIT License.


----------------------------------------------------
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

