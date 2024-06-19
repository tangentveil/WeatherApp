import "./App.css";
import { Box, Container, Paper, Typography } from "@mui/material";
import { LocationForm, WeatherCard } from "./components";
import { useEffect, useState } from "react";
import { fetchWeather } from "./fetchWeather";
import Cloudy from "./assets/weather_app.svg";
import Raining from "./assets/raining.svg";
import Sunny from "./assets/sunny.svg";
import Weather from "./assets/default_weather.svg";

const App = () => {
  const [location, setLocation] = useState("Guna");
  const [loading, setLoading] = useState(true);
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const getWeather = async () => {
      try {
        const data = await fetchWeather(location);
        setWeatherData(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    getWeather();
  }, [location]);

  let weatherImage = Weather;

  if (weatherData?.weather[0].main === "Rain") {
    weatherImage = Raining;
  } else if (weatherData?.weather[0].main === "Clear") {
    weatherImage = Sunny;
  } else if (weatherData?.weather[0].main === "Clouds") {
    weatherImage = Cloudy;
  }

  return (
    <Container
      maxWidth="xs"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Paper elevation={8} className="paper" sx={{ borderRadius: "12px" }}>
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

            {loading && <Typography variant="h3">Loading...</Typography>}

            {weatherData && <WeatherCard weatherData={weatherData} />}
          </Box>
        </Container>
      </Paper>
    </Container>
  );
};

export default App;
