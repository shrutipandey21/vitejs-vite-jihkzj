// src/components/WeatherCard.jsx

import React from 'react';
import { WiDaySunny, WiNightClear, WiCloud, WiRain } from 'react-icons/wi';
import './WeatherCard.css';

const WeatherCard = ({ weather }) => {
  const { city, temperature, windspeed, conditions, isDaytime } = weather;

  const getIcon = () => {
    switch (conditions.toLowerCase()) {
      case 'clear':
        return isDaytime ? <WiDaySunny /> : <WiNightClear />;
      case 'cloudy':
        return <WiCloud />;
      case 'rainy':
        return <WiRain />;
      default:
        return <WiDaySunny />;
    }
  };

  return (
    <div className="weather-card">
      <h2>{city}</h2>
      <div className="icon">{getIcon()}</div>
      <div className="weather-info">
        <p>
          <strong>Temperature:</strong> {temperature}°C
        </p>
        <p>
          <strong>Wind Speed:</strong> {windspeed} km/h
        </p>
        <p>
          <strong>Conditions:</strong> {conditions}
        </p>
      </div>
    </div>
  );
};

export default WeatherCard;
