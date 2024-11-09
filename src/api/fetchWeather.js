// src/api/fetchWeather.js

async function fetchCoordinates(city) {
  const response = await fetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
      city
    )}`
  );
  const data = await response.json();

  if (!data.results || data.results.length === 0) {
    throw new Error('Location not found');
  }

  const { latitude, longitude, timezone } = data.results[0];
  return { latitude, longitude, timezone };
}

export async function fetchWeather(city) {
  try {
    const { latitude, longitude, timezone } = await fetchCoordinates(city);

    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&daily=sunrise,sunset&timezone=${timezone}`
    );
    if (!response.ok) throw new Error('Failed to fetch weather data');

    const data = await response.json();

    const weatherCode = data.current_weather.weathercode;
    const temperature = data.current_weather.temperature;
    const windspeed = data.current_weather.windspeed;

    // Get sunrise and sunset data for today in local timezone
    const sunrise = new Date(data.daily.sunrise[0]);
    const sunset = new Date(data.daily.sunset[0]);

    // Get current time in the same timezone
    const currentTime = new Date();
    const localTime = new Date(
      currentTime.toLocaleString('en-US', { timeZone: timezone })
    );

    // Check if current time is between sunrise and sunset
    const isDaytime = localTime >= sunrise && localTime <= sunset;

    // Determine weather conditions based on weather code
    let conditions = '';
    switch (weatherCode) {
      case 0:
        conditions = 'Clear';
        break;
      case 1:
        conditions = 'Partly Cloudy';
        break;
      case 2:
        conditions = 'Cloudy';
        break;
      case 3:
        conditions = 'Overcast';
        break;
      case 45:
        conditions = 'Foggy';
        break;
      case 48:
        conditions = 'Foggy';
        break;
      case 51:
        conditions = 'Drizzle';
        break;
      case 53:
        conditions = 'Drizzle';
        break;
      case 55:
        conditions = 'Drizzle';
        break;
      case 56:
        conditions = 'Freezing Drizzle';
        break;
      case 57:
        conditions = 'Freezing Drizzle';
        break;
      case 61:
        conditions = 'Rainy';
        break;
      case 63:
        conditions = 'Rainy';
        break;
      case 65:
        conditions = 'Rainy';
        break;
      case 66:
        conditions = 'Freezing Rain';
        break;
      case 67:
        conditions = 'Heavy Freezing Rain';
        break;
      case 71:
        conditions = 'Snow';
        break;
      case 73:
        conditions = 'Snow';
        break;
      case 75:
        conditions = 'Snow';
        break;
      case 77:
        conditions = 'Snow Grains';
        break;
      case 80:
        conditions = 'Rain Showers';
        break;
      case 81:
        conditions = 'Rain Showers';
        break;
      case 82:
        conditions = 'Heavy Rain Showers';
        break;
      case 85:
        conditions = 'Snow Showers';
        break;
      case 86:
        conditions = 'Snow Showers';
        break;
      case 95:
        conditions = 'Thunderstorms';
        break;
      case 96:
        conditions = 'Thunderstorms';
        break;
      case 99:
        conditions = 'Severe Thunderstorms';
        break;
      default:
        conditions = 'Unknown';
    }

    return {
      city,
      temperature,
      windspeed,
      conditions,
      isDaytime,
    };
  } catch (error) {
    throw new Error(error.message);
  }
}
