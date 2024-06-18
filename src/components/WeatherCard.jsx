import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";

const WeatherCard = ({ weatherData }) => {
  const { main, weather, name } = weatherData;

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", placeItems: "center" }}
      padding={1}
    >
      <Typography variant="h2">{name}</Typography>
      <Typography variant="h4">{weather[0].main}</Typography>
      <Typography variant="body1">{weather[0].description}</Typography>

      <Box
        sx={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Typography variant="h6">{`${main.temp_min}°C`}</Typography>
        <Typography variant="h3" padding={2}>{`${main.temp}°C`}</Typography>
        <Typography variant="h6">{`${main.temp_max}°C`}</Typography>
      </Box>
    </Box>
  );
};

export default WeatherCard;
