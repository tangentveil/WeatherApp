import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import { LocationForm, WeatherCard, AqiCard } from "./components";
import { useEffect, useState } from "react";
import { fetchWeather, fetchAQI } from "./api";

const App = () => {
  const [location, setLocation] = useState("Guna");
  const [weatherData, setWeatherData] = useState(null);
  const [aqiData, setAQIData] = useState(null);

  // fetchAQI(location);

  useEffect(() => {
    fetchAQI().then(setAQIData);
  }, []);

  useEffect(() => {
    if (location) {
      fetchWeather(location).then(setWeatherData);
      fetchAQI().then(setAQIData);
    }
  }, [location]);

  console.log(weatherData);

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
            <Typography variant="h2" component="h1" gutterBottom>
              Weather
            </Typography>
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
