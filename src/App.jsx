import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import { LocationForm, WeatherCard, AqiCard } from "./components";
import { useEffect, useState } from "react";
import { fetchWeather, fetchAQI } from "./api";
import Cloudy from "./assets/weather_app.svg";
import Raining from "./assets/raining.svg";
import Sunny from "./assets/sunny.svg";
import Weather from "./assets/default_weather.svg";

const App = () => {
  const [location, setLocation] = useState("Guna");
  const [weatherData, setWeatherData] = useState(null);
  const [aqiData, setAQIData] = useState(null);

  let weatherImage = Weather;

  if (weatherData?.weather[0].main === "Rain") {
    weatherImage = Raining;
  } else if (weatherData?.weather[0].main === "Clear") {
    weatherImage = Sunny;
  } else if (weatherData?.weather[0].main === "Clouds") {
    weatherImage = Cloudy;
  }

  // fetchAQI(location);

  // useEffect(() => {
  //   fetchAQI().then(setAQIData);
  // }, []);

  useEffect(() => {
    if (location) {
      fetchWeather(location).then(setWeatherData);
      fetchAQI().then(setAQIData);
    }
  }, [location]);

  console.log(weatherData?.weather[0].main);

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Paper elevation={8} sx={{ borderRadius: "12px" }}>
        <Container maxWidth="sm">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              padding: "10px",
            }}
            mt={2}
          >
            
            <img src={weatherImage} width="250px" height="200px" alt="weather" />

            <LocationForm location={location} setLocation={setLocation} />

            {weatherData && <WeatherCard weatherData={weatherData} />}

            {/* {aqiData && <AqiCard aqiData={aqiData} />} */}
          </Box>
        </Container>
      </Paper>
    </Container>
  );
};

export default App;
