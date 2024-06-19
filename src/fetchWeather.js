import axios from "axios";

const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5/";
const WEATHER_API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export const fetchWeather = async (location) => {
  try {
    const response = await axios.get(
      `${WEATHER_API_URL}weather?q=${location}&units=metric&APPID=${WEATHER_API_KEY}`
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return null;
  }
};
