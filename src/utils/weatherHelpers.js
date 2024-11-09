// src/utils/weatherHelpers.js

export function getTimeOfDay() {
  const hours = new Date().getHours();
  return hours >= 6 && hours < 18 ? 'day' : 'night';
}
