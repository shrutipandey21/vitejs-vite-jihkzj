// src/App.jsx

import React, { useState } from 'react';
import { fetchWeather } from './api/fetchWeather';
import WeatherCard from './components/WeatherCard';
import './App.css';

const App = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFetchWeather = async () => {
    setLoading(true);
    setError(null);
    try {
      const weatherData = await fetchWeather(city);
      setWeather(weatherData);
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  // Conditionally apply background class based on the search results
  const backgroundClass = weather
    ? weather.isDaytime
      ? 'app day'
      : 'app night'
    : 'app pink-gradient'; // Pink gradient when no search is active

  return (
    <div className={backgroundClass}>
      <h1>Weather Now</h1>
      <input
        type="text"
        placeholder="Enter city name (e.g., London)"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={handleFetchWeather} disabled={loading || !city}>
        {loading ? 'Loading...' : 'Get Weather'}
      </button>
      {error && <p className="error">{error}</p>}
      {weather && <WeatherCard weather={weather} />}
    </div>
  );
};

export default App;
