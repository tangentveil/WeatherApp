import React from "react";
import { Typography, Box, Paper, Container } from "@mui/material";

const AqiCard = ({ aqiData }) => {
  console.log(aqiData.data.current.pollution.aqius);
  const aqi = aqiData.data.current.pollution.aqius;

  return (
    <Box my={2}>
      <Typography variant="h5">Air Quality Index (AQI)</Typography>
      <Typography variant="h6">{aqi}</Typography>
    </Box>
  );
};

export default AqiCard;
