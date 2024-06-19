import "./App.css";
import { Box, Container, Paper, Typography } from "@mui/material";
import { CityForm, WeatherCard } from "./components";
import { useEffect, useState } from "react";
import { fetchWeather } from "./fetchWeather";
import Cloudy from "./assets/weather_app.svg";
import Raining from "./assets/raining.svg";
import Sunny from "./assets/sunny.svg";
import Weather from "./assets/default_weather.svg";
import NotFound from "./assets/not_found.svg";

const App = () => {
  const [city, setCity] = useState("Guna");
  const [loading, setLoading] = useState(true);
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getWeather = async () => {
      setError(false);
      setLoading(true);
      try {
        const data = await fetchWeather(city);
        if (data) {
          setWeatherData(data);
        } else {
          setError(true);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
        setError(true);
        setLoading(false);
      }
    };

    getWeather();
  }, [city]);

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
      maxWidth="sm"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Paper elevation={8} className="paper" sx={{ borderRadius: "12px" }}>
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
            <img src={weatherImage} className="image" alt="weather" />

            <CityForm city={city} setCity={setCity} />

            {loading && <Typography variant="h3">Loading...</Typography>}

            {!loading && error && (
              <img src={NotFound} className="image" alt="Not Found" />
            )}

            {weatherData && !error && !loading && (
              <WeatherCard weatherData={weatherData} />
            )}
          </Box>
        </Container>
      </Paper>
    </Container>
  );
};

export default App;
