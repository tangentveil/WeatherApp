import './App.css'
import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import { LocationForm, WeatherCard, AqiCard } from "./components";
import { useEffect, useState } from "react";
import { fetchWeather } from "./api";
import Cloudy from "./assets/weather_app.svg";
import Raining from "./assets/raining.svg";
import Sunny from "./assets/sunny.svg";
import Weather from "./assets/default_weather.svg";

const App = () => {
  const [location, setLocation] = useState("Guna");
  const [weatherData, setWeatherData] = useState(null);

  let weatherImage = Weather;

  if (weatherData?.weather[0].main === "Rain") {
    weatherImage = Raining;
  } else if (weatherData?.weather[0].main === "Clear") {
    weatherImage = Sunny;
  } else if (weatherData?.weather[0].main === "Clouds") {
    weatherImage = Cloudy;
  }

  useEffect(() => {
    if (location) {
      fetchWeather(location).then(setWeatherData);
    }
  }, [location]);


  return (
    <Container
      maxWidth="xs"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Paper elevation={8} className='paper' sx={{ borderRadius: "12px" }}>
        <Container maxWidth="xs">
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
            
            <img src={weatherImage} className="image" alt="weather" />

            <LocationForm location={location} setLocation={setLocation} />

            {weatherData && <WeatherCard weatherData={weatherData} />}
          </Box>
        </Container>
      </Paper>
    </Container>
  );
};

export default App;
