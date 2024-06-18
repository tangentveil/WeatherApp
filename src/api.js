import axios from "axios";

const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5/";
const AQI_API_URL = "http://api.airvisual.com/v2/";
// const WEATHER_API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const WEATHER_API_KEY = "6cda7cabf62a98ca769ca062515418eb";
// const AQI_API_KEY = import.meta.env.VITE_AQI_API_KEY;
const AQI_API_KEY = "5bdd1364-e811-496c-8143-38237e170ef8";

console.log(AQI_API_KEY);
console.log(WEATHER_API_KEY);

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

export const fetchAQI = async () => {
  try {
    const response = await axios.get(
      `${AQI_API_URL}nearest_city?key=${AQI_API_KEY}`
    );
    // console.log(response.data)

    return response.data;
  } catch (error) {
    console.error("Error fetching AQI data:", error);
    return null;
  }
};
